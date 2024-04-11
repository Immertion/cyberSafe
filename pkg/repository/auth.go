package repository

import (
	user "cyberSafe"
	"errors"
	"fmt"

	"github.com/jmoiron/sqlx"
)

type AuthPostgres struct {
	db *sqlx.DB
}

func NewAuthPostgres(db *sqlx.DB) *AuthPostgres {
	return &AuthPostgres{db: db}
}

func (r *AuthPostgres) CreateUser(user user.User) (int, error) {
	id := 0
	var userExists bool

	query := fmt.Sprintf("SELECT EXISTS(SELECT * FROM %s WHERE mail=$1 AND confirmed=true)", userTable)
	err := r.db.Get(&userExists, query, user.Mail)
	if err != nil {
		return 0, err
	}

	if !userExists {
		query := fmt.Sprintf("SELECT EXISTS(SELECT * FROM %s WHERE mail=$1 AND confirmed=false)", userTable)
		err := r.db.Get(&userExists, query, user.Mail)
		if err != nil || userExists {
			query = fmt.Sprintf(`UPDATE %s SET password=$1 WHERE mail=$2`, userTable)
			_, err = r.db.Exec(query, user.Password, user.Mail)
			if err != nil {
				return 0, err
			}
			query = fmt.Sprintf(`SELECT id FROM %s WHERE mail=$1`, userTable)
			err := r.db.Get(&id, query, user.Mail)
			if err != nil {
				return 0, err
			}

		} else {
			query = fmt.Sprintf("INSERT INTO %s (login, password, mail) values ($1, $2, $3) RETURNING id", userTable)
			row := r.db.QueryRow(query, user.Login, user.Password, user.Mail)
			if err := row.Scan(&id); err != nil {
				return 0, err
			}

		}
	} else {
		err = errors.New("already exists")
		return 0, err
	}

	return id, nil
}

func (r *AuthPostgres) GetUser(mail, password string) (user.User, error) {
	var user user.User

	query := fmt.Sprintf("SELECT id, confirmed FROM %s WHERE mail=$1 AND password=$2", userTable)
	err := r.db.Get(&user, query, mail, password)

	return user, err
}
