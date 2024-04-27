package repository

import (
	user "cyberSafe"
	"math/big"

	"github.com/jmoiron/sqlx"
)

type Authorization interface {
	CreateUser(user user.User) (int, error)
	GetUser(username, password string) (user.User, error)
}

type Mail interface {
	SendCodeActivation(id int, rdmKey string) (string, error)
	CheckCodeActivation(id int, rdmKey, iconURL string) (bool, error)
}

type CryptoAddress interface {
	SetCryptoAddress(user_id int, publicKey, privateKey, network string) error
	GetEthBalance(id int) (*big.Float, *big.Float, error)
	GetAddressETC(id int) (string, error)
	GetIdenIcon(id int) (string, error)
	GetAddressGasUsd() (*big.Float, error)
	CreateTransaction(id int, amount float64, toAddressString string) (string, error)
}

type Repository struct {
	Authorization
	Mail
	CryptoAddress
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
		Mail:          NewMailPostgres(db),
		CryptoAddress: NewCryptoAddress(db),
	}
}
