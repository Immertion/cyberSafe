package repository

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math"
	"math/big"
	"net/http"
	"time"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/jmoiron/sqlx"
	"github.com/sirupsen/logrus"
)

type CryptoAddressPostgress struct {
	db *sqlx.DB
}

func NewCryptoAddress(db *sqlx.DB) *CryptoAddressPostgress {
	return &CryptoAddressPostgress{db: db}
}

type Response struct {
	CurrentPrice float64 `json:"current_price"`
}

var currentPriceETHtoUSD float64

func BalanceETHtoUSD() {

	go func() {
		for now := range time.Tick(time.Minute) {
			url := "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&YOUR_API_KEY=CG-ZGGmfKAQj2FCLiRRkhhLRtna"
			resp, err := http.Get(url)
			if err != nil {
				return
			}
			defer resp.Body.Close()

			body, err := ioutil.ReadAll(resp.Body)
			if err != nil {
				return

			}

			var ethereums []Response
			if err = json.Unmarshal(body, &ethereums); err != nil {
				return
			}
			currentPriceETHtoUSD = ethereums[0].CurrentPrice

			logrus.Printf("Последнее обновление ETH было %s\n", now)
		}
	}()
}

func getEthPrice(ETC *big.Float) *big.Float {

	EtcInUsd := new(big.Float)
	balanceInUSD := new(big.Float)

	return balanceInUSD.Mul(EtcInUsd.SetFloat64(currentPriceETHtoUSD), ETC)
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

func (r *CryptoAddressPostgress) GetAddressETC(id int) (string, error) {
	var address string

	query := fmt.Sprintf("SELECT address FROM %s WHERE id_user=$1", keysTable)
	err := r.db.Get(&address, query, id)
	if err != nil {
		return "", err
	}

	return address, nil
}
