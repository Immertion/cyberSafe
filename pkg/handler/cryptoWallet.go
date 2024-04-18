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
