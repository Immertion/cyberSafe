package handler

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

const (
	authorizationHeader = "Authorization"
	userCtx             = "userId"
)

func getJWT(h *Handler, c *gin.Context) (int, bool, error) {
	token, err := c.Cookie("jwtToken")
	if err != nil {
		return 0, false, err
	}

	userId, Confirmed, err := h.services.ParseToken(token)
	if err != nil {
		return 0, false, err
	}

	return userId, Confirmed, nil
}

func (h *Handler) userIdentify(c *gin.Context) {
	_, isVerificated, err := getJWT(h, c)
	if err != nil || !isVerificated {
		newErrorResponse(c, http.StatusUnauthorized, "Unauthorized")
		return
	}
}

func (h *Handler) userIdentifyById(c *gin.Context) {
	userId, _, _ := getJWT(h, c)
	getId, err := getUserId(c)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	if userId != getId {
		if getId == 0 {
			return
		}
		newErrorResponse(c, http.StatusForbidden, "Forbidden")
		return
	}

}

func getUserId(c *gin.Context) (int, error) {

	str := c.Param("id")

	if str == "" {
		return 0, nil
	}
	id, err := strconv.Atoi(str)
	if err != nil {
		return 0, err
	}

	return id, nil
}
