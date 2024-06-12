package service

import (
	"cyberSafe/pkg/repository"
	"math/big"
)

type CryptoService struct {
	repo repository.CryptoAddress
}

func NewCryptoService(repo repository.CryptoAddress) *CryptoService {
	return &CryptoService{repo: repo}
}

func (s CryptoService) GetBalanceETC(id int) (*big.Float, *big.Float, error) {
	return s.repo.GetEthBalance(id)
}

func (s CryptoService) GetBalanceUSDT(id int) (*big.Float, error) {
	return s.repo.GetUSDTBalance(id)
}

func (s CryptoService) GetAddressETC(id int) (string, error) {
	return s.repo.GetAddressETC(id)
}

func (s CryptoService) GetAddressGasUsd() (*big.Float, error) {
	return s.repo.GetAddressGasUsd()
}

func (s CryptoService) CreateTransaction(id int, amount float64, toAddressString string) (string, error) {
	return s.repo.CreateTransaction(id, amount, toAddressString)
}

func (s CryptoService) GetIdenIcon(id int) (string, error) {
	return s.repo.GetIdenIcon(id)
}

func (s CryptoService) GetUserNameById(id int) (string, error) {
	return s.repo.GetUserNameById(id)
}
