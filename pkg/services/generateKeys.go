package service

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"cyberSafe/pkg/repository"
	"fmt"

	"github.com/ethereum/go-ethereum/crypto"
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

	privateKey, err = crypto.HexToECDSA(privateKeyString)
	if err != nil {
		return err
	}

	publicKey := privateKey.Public()
	publicKeyECDSA := publicKey.(*ecdsa.PublicKey)

	address := fmt.Sprint(crypto.PubkeyToAddress(*publicKeyECDSA))
	// fmt.Println("Ethereum Address:", addressECDSA)

	return s.repo.SetCryptoAddress(user_id, address, privateKeyString, "ETC")
}
