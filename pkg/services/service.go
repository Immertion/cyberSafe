package service

import (
	user "cyberSafe"
	"cyberSafe/pkg/repository"
	"math/big"
)

type Authorization interface {
	CreateUser(user user.User) (int, error)
	GenerateToken(username, password string) (string, error)
	ParseToken(token string) (int, bool, error)
}

type Mail interface {
	SendCodeActivation(id int) error
	CheckCodeActivation(id int, rdmKey string) (bool, error)
}

type GenerateKeys interface {
	GenerateKeysEtherium(user_id int) error
}

type Crypto interface {
	GetBalanceETC(id int) (*big.Float, *big.Float, error)
}

type Service struct {
	Authorization
	Mail
	GenerateKeys
	Crypto
}

func NewService(repos *repository.Repository) *Service {
	return &Service{
		NewAuthService(repos.Authorization),
		NewSendMessageService(repos.Mail),
		NewGenerateKeysService(repos.CryptoAddress),
		NewCryptoService(repos.CryptoAddress),
	}
}
