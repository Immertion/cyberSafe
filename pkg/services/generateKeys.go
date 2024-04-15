package service

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"cyberSafe/pkg/repository"
	"fmt"

	"golang.org/x/crypto/sha3"
)

type GenerateKeysService struct {
	repo repository.CryptoAddress
}

func NewGenerateKeysService(repo repository.CryptoAddress) *GenerateKeysService {
	return &GenerateKeysService{repo: repo}
}

func (s GenerateKeysService) GenerateKeysEtherium(user_id int) error {
	privateKey, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	if err != nil {
		return err
	}

	privateKeyString := fmt.Sprintf("%x", privateKey.D.Bytes())

	hash := sha3.NewLegacyKeccak256()
	hash.Write(elliptic.Marshal(privateKey.Curve, privateKey.X, privateKey.Y)[1:]) // Убираем первый байт
	address := fmt.Sprintf("0x%x", hash.Sum(nil)[12:])

	return s.repo.SetCryptoAddress(user_id, address, privateKeyString, "ETC")
}
