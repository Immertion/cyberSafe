package handler

import (
	"math/big"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

type Balance struct {
	ConvertToUsd  *big.Float `json:"balanceUsd"    binding:"required"`
	BalanceCrypto float64    `json:"balanceCrypto" binding:"required"`
}

func (h *Handler) GetEthBalanceById(c *gin.Context) {

	authHeader := c.GetHeader("Authorization")
	token := strings.TrimPrefix(authHeader, "Bearer ")

	userId, _, err := parseJWT(h, token)
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	balanceEtc, balanceUsd, err := h.services.GetBalanceETC(userId)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	var balance Balance

	balanceETC, _ := balanceEtc.Float64()
	balance.BalanceCrypto = balanceETC
	balance.ConvertToUsd = balanceUsd

	c.JSON(http.StatusOK, balance)
}

func (h *Handler) GetAddressETCById(c *gin.Context) {

	authHeader := c.GetHeader("Authorization")
	token := strings.TrimPrefix(authHeader, "Bearer ")

	userId, _, err := parseJWT(h, token)
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	address, err := h.services.GetAddressETC(userId)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, address)
}

func (h *Handler) GetUSDTBalanceById(c *gin.Context) {
	authHeader := c.GetHeader("Authorization")
	token := strings.TrimPrefix(authHeader, "Bearer ")

	userId, _, err := parseJWT(h, token)
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	balanceUSDT, err := h.services.GetBalanceUSDT(userId)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, balanceUSDT)
}

func (h *Handler) GetGasPrice(c *gin.Context) {

	gasPrice, err := h.services.GetAddressGasUsd()
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, gasPrice)
}

type sendDataTransaction struct {
	Address string  `json:"address" binding:"required"`
	Amount  float64 `json:"amount" binding:"required"`
}

func (h *Handler) SendTransactionETH(c *gin.Context) {
	var input sendDataTransaction

	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	authHeader := c.GetHeader("Authorization")
	token := strings.TrimPrefix(authHeader, "Bearer ")

	userId, _, err := parseJWT(h, token)
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	txHash, err := h.services.CreateTransaction(userId, input.Amount, input.Address)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, txHash)
}

func (h *Handler) GetIconURL(c *gin.Context) {
	authHeader := c.GetHeader("Authorization")
	token := strings.TrimPrefix(authHeader, "Bearer ")

	userId, _, err := parseJWT(h, token)
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	blockURL, err := h.services.GetIdenIcon(userId)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, blockURL)
}
