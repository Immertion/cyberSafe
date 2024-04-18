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

func (s CryptoService) GetAddressETC(id int) (string, error) {
	return s.repo.GetAddressETC(id)
}
