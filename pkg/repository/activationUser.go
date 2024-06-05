package repository

import (
	"errors"
	"fmt"

	"github.com/jmoiron/sqlx"
)

type MailPostgres struct {
	db *sqlx.DB
}

func NewMailPostgres(db *sqlx.DB) *MailPostgres {
	return &MailPostgres{db: db}
}

func (r *MailPostgres) SendCodeActivation(id int, rdmKey string) (string, error) {
	var mail string

	query1 := fmt.Sprintf("UPDATE %s SET activation_code=$1 WHERE id=$2", userTable)
	row := r.db.QueryRow(query1, rdmKey, id)
	if err := row.Scan(&id); err != nil {
	}

	query2 := fmt.Sprintf("SELECT mail FROM %s WHERE id=$1", userTable)
	err := r.db.Get(&mail, query2, id)
	if err != nil {
		return "", err
	}

	return mail, nil
}

func (r *MailPostgres) SendPrivateKey(id int) (string, string, error) {
	var privateKey, mail string

	query1 := fmt.Sprintf("SELECT mail FROM %s WHERE id=$1", userTable)
	err := r.db.Get(&mail, query1, id)
	if err != nil {
		return "", "", err
	}

	query2 := fmt.Sprintf("SELECT private_key FROM %s WHERE id_user=$1", keysTable)
	err = r.db.Get(&privateKey, query2, id)
	if err != nil {
		return "", "", err
	}

	return privateKey, mail, nil
}

type CodeActivation struct {
	CodeActivation string `db:"activation_code"`
	Confirmed      bool   `db:"confirmed"`
}

func (r *MailPostgres) CheckCodeActivation(id int, rdmKey, iconURL string) (bool, error) {
	var cdActv CodeActivation
	var verified bool

	query1 := fmt.Sprintf("SELECT activation_code, confirmed FROM %s WHERE id=$1", userTable)
	err := r.db.Get(&cdActv, query1, id)
	if err != nil {
		return false, err
	}

	if cdActv.Confirmed == true {
		err = errors.New("account already activated")
		return true, err
	}

	verified = cdActv.CodeActivation == rdmKey
	query2 := fmt.Sprintf("UPDATE %s SET confirmed=$1 WHERE id=$2", userTable)
	r.db.Get(&cdActv.CodeActivation, query2, verified, id)

	if verified == true {
		query2 := fmt.Sprintf("UPDATE %s SET iden_icon=$1 WHERE id=$2", userTable)
		r.db.Get(&cdActv.CodeActivation, query2, iconURL, id)
	}

	return verified, err
}
