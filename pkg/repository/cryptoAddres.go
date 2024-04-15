package repository

import (
	"context"
	"encoding/json"
	"fmt"
	"math"
	"math/big"
	"net/http"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/jmoiron/sqlx"
)

type CryptoAddressPostgress struct {
	db *sqlx.DB
}

func NewCryptoAddress(db *sqlx.DB) *CryptoAddressPostgress {
	return &CryptoAddressPostgress{db: db}
}

type Response struct {
	Ethereum struct {
		Usd float64 `json:"usd"`
	} `json:"ethereum"`
}

func getEthPrice(ETC *big.Float) *big.Float {
	resp, err := http.Get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD")
	if err != nil {
		return nil
	}
	defer resp.Body.Close()

	var response Response
	if err := json.NewDecoder(resp.Body).Decode(&response); err != nil {
		return nil
	}

	EtcInUsd := new(big.Float)
	balanceInUSD := new(big.Float)
	// fmt.Println(response.Ethereum.Usd)
	return balanceInUSD.Mul(EtcInUsd.SetFloat64(response.Ethereum.Usd), ETC)
}

func (r *CryptoAddressPostgress) SetCryptoAddress(user_id int, publicKey, privateKey, network string) error {
	var id int
	query := fmt.Sprintf("INSERT INTO %s (id_user, address, private_key, network) values ($1, $2, $3, $4) RETURNING id", keysTable)
	row := r.db.QueryRow(query, user_id, publicKey, privateKey, network)
	if err := row.Scan(&id); err != nil {
		return err
	}

	return nil
}

func (r *CryptoAddressPostgress) GetEthBalance(id int) (*big.Float, *big.Float, error) {
	var address string

	query := fmt.Sprintf("SELECT address FROM %s WHERE id_user=$1", keysTable)
	err := r.db.Get(&address, query, id)
	if err != nil {
		return nil, nil, err
	}

	infura_client, err := ethclient.Dial("https://mainnet.infura.io/v3/c902a2bbbb964fbf91e82557534a826e")
	if err != nil {
		return nil, nil, err
	}

	account := common.HexToAddress(address)
	balance, err := infura_client.BalanceAt(context.Background(), account, nil) // nil будет получать баланс на последнем блоке
	if err != nil {
		return nil, nil, err
	}

	balanceInEth := new(big.Float).Quo(new(big.Float).SetInt(balance), big.NewFloat(math.Pow10(18)))

	balanceInUSD := getEthPrice(balanceInEth)

	return balanceInEth, balanceInUSD, nil
}
