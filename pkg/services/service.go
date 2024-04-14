package service

import (
	user "cyberSafe"
	"cyberSafe/pkg/repository"
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

type Service struct {
	Authorization
	Mail
}

func NewService(repos *repository.Repository) *Service {
	return &Service{
		NewAuthService(repos.Authorization),
		NewSendMessageService(repos.Mail),
	}
}
