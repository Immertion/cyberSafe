package repository

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math"
	"math/big"
	"net/http"
	"strings"
	"time"

	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
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
	CurrentPrice float64 `json:"current_price"`
}

const (
	tokenUSDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
	erc20ABI  = `[{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]`
	infuraURL = "https://mainnet.infura.io/v3/c902a2bbbb964fbf91e82557534a826e"
)

var currentPriceETHtoUSD float64

const timeLimit = 20

func BalanceETHtoUSD() {

	go func() {
		for _ = range time.Tick(time.Second * timeLimit) {
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

			// logrus.Printf("Последнее обновление ETH было %s\n", now)
		}
	}()
}

func getEthPrice(ETC *big.Float) *big.Float {

	EtcInUsd := new(big.Float)
	balanceInUSD := new(big.Float)

	return balanceInUSD.Mul(EtcInUsd.SetFloat64(currentPriceETHtoUSD), ETC)
}

func (r *CryptoAddressPostgress) SetNetworkAddress(user_id int, publicKey, privateKey, network string) error {
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

	infura_client, err := ethclient.Dial(infuraURL)
	if err != nil {
		return nil, nil, err
	}

	account := common.HexToAddress(address)
	balance, err := infura_client.BalanceAt(context.Background(), account, nil)
	if err != nil {
		return nil, nil, err
	}

	balanceInEth := new(big.Float).Quo(new(big.Float).SetInt(balance), big.NewFloat(math.Pow10(18)))

	balanceInUSD := getEthPrice(balanceInEth)

	return balanceInEth, balanceInUSD, nil
}

func (r *CryptoAddressPostgress) GetUSDTBalance(id int) (*big.Float, error) {
	var address string

	query := fmt.Sprintf("SELECT address FROM %s WHERE id_user=$1", keysTable)
	err := r.db.Get(&address, query, id)
	if err != nil {
		return nil, err
	}

	client, err := ethclient.Dial(infuraURL)
	if err != nil {
		return nil, err
	}

	tokenAddress := common.HexToAddress(tokenUSDT)
	accountAddress := common.HexToAddress(address)

	contractABI, err := abi.JSON(strings.NewReader(erc20ABI))
	if err != nil {
		return nil, err
	}

	data, err := contractABI.Pack("balanceOf", accountAddress)
	if err != nil {
		return nil, err
	}

	callMsg := ethereum.CallMsg{
		To:   &tokenAddress,
		Data: data,
	}

	result, err := client.CallContract(context.Background(), callMsg, nil)
	if err != nil {
		return nil, err
	}

	balance := new(big.Int)
	balance.SetBytes(result)

	weiToEther := new(big.Float).SetInt(big.NewInt(0).Exp(big.NewInt(10), big.NewInt(18), nil))
	floatBalance := new(big.Float).SetInt(balance)
	floatBalance.Quo(floatBalance, weiToEther)

	return floatBalance, nil
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

func (r *CryptoAddressPostgress) GetAddressGasUsd() (*big.Float, error) {
	wei := 1e18

	infura_client, err := ethclient.Dial("https://mainnet.infura.io/v3/c902a2bbbb964fbf91e82557534a826e")
	if err != nil {
		return nil, err
	}

	gasPrice, err := infura_client.SuggestGasPrice(context.Background())
	if err != nil {
		return nil, err
	}

	gasPriceInEth := new(big.Float).Quo(new(big.Float).SetInt(gasPrice), big.NewFloat(wei))

	gasPriceInUSD := new(big.Float).Mul(gasPriceInEth, big.NewFloat(currentPriceETHtoUSD))

	return gasPriceInUSD, nil
}

func (r *CryptoAddressPostgress) CreateTransaction(id int, amount float64, toAddressString string) (string, error) {
	// wei := big.NewInt(1e18)
	// var privateKeyString string

	// query := fmt.Sprintf("SELECT private_key FROM %s WHERE id_user=$1", keysTable)
	// err := r.db.Get(&privateKeyString, query, id)
	// if err != nil {
	// 	return "", err
	// }
	// privateKey, err := crypto.HexToECDSA(privateKeyString)
	// if err != nil {
	// 	return "nil", nil
	// }
	// client, err := ethclient.Dial("https://mainnet.infura.io/v3/c902a2bbbb964fbf91e82557534a826e")
	// if err != nil {
	// 	return "nil", err
	// }

	// publicKey := privateKey.Public()
	// publicKeyECDSA := publicKey.(*ecdsa.PublicKey)

	// fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)

	// nonce, err := client.PendingNonceAt(context.Background(), fromAddress)
	// if err != nil {
	// 	return "nil", err
	// }

	// val := big.NewFloat(amount / currentPriceETHtoUSD)
	// value := new(big.Int)
	// val.Mul(val, new(big.Float).SetInt(wei))
	// value, _ = val.Int(nil)
	// gasLimit := uint64(21000) // in units
	// gasPrice, err := client.SuggestGasPrice(context.Background())
	// if err != nil {
	// 	return "nil", err
	// }

	// toAddress := common.HexToAddress(toAddressString)

	// tx := types.NewTransaction(nonce, toAddress, value, gasLimit, gasPrice, nil)
	// chainID, err := client.NetworkID(context.Background())
	// if err != nil {
	// 	return "nil", err
	// }

	// signedTx, err := types.SignTx(tx, types.NewEIP155Signer(chainID), privateKey)
	// if err != nil {
	// 	return "nil", err
	// }

	// err = client.SendTransaction(context.Background(), signedTx)
	// if err != nil {
	// 	return "nil", err
	// }

	// txHash := signedTx.Hash().Hex()

	txHash := "0x2bd2cdac9aba1df8bd25fdac3154f8ace0db04deab5befa11f563130f6fb9f1e"
	return txHash, nil
}

func (r *CryptoAddressPostgress) GetIdenIcon(id int) (string, error) {
	var blokiesURL string

	query := fmt.Sprintf("SELECT iden_icon FROM %s WHERE id=$1", userTable)
	err := r.db.Get(&blokiesURL, query, id)
	if err != nil {
		return "", err
	}

	return blokiesURL, nil
}

func (r *CryptoAddressPostgress) GetUserNameById(id int) (string, error) {
	var userName string

	query := fmt.Sprintf("SELECT login FROM %s WHERE id=$1", userTable)
	err := r.db.Get(&userName, query, id)
	if err != nil {
		return "", err
	}

	return userName, nil
}
