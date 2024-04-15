package handler

import (
	"math/big"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

type Balance struct {
	ConvertToUsd  *big.Float `json:"balanceUsd"    binding:"required"`
	BalanceCrypto *big.Float `json:"balanceCrypto" binding:"required"`
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

	balance.BalanceCrypto = balanceEtc
	balance.ConvertToUsd = balanceUsd

	c.JSON(http.StatusOK, balance)
}
