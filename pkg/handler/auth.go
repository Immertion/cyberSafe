package handler

import (
	user "cyberSafe"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func (h *Handler) signUp(c *gin.Context) {
	var input user.User

	if err := c.BindJSON(&input); err != nil {
		fmt.Printf("Failed to create a user: %s\n", err.Error())
		c.JSON(http.StatusBadRequest, "Failed to create a user")
		return
	}

	id, err := h.services.Authorization.CreateUser(input)
	if err != nil {
		if err.Error() == "already exists" {
			newErrorResponse(c, http.StatusBadRequest, err.Error())
			return
		}
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	err = h.services.SendCodeActivation(id)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

type signInInput struct {
	Email    string `json:"mail" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func (h *Handler) signIn(c *gin.Context) {
	var input signInInput

	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	token, err := h.services.Authorization.GenerateToken(input.Email, input.Password)
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	_, isVerificated, err := h.services.ParseToken(token)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	if !isVerificated {
		newErrorResponse(c, http.StatusUnauthorized, "Unauthorized")
		return
	}

	domain := viper.GetString("domain")
	ageToken := viper.GetInt("ageToken")

	c.SetCookie("jwtToken", token, ageToken, "/", domain, false, true)

	c.JSON(http.StatusOK, map[string]interface{}{
		"token": token,
	})
}

func (h *Handler) signOut(c *gin.Context) {
	domain := viper.GetString("domain")

	c.SetCookie("jwtToken", "", -1, "/", domain, false, true)

	c.JSON(http.StatusOK, "ok")
}

type Message struct {
	Code string `json:"code" binding:"required"`
}

func (h *Handler) checkActivationUser(c *gin.Context) {
	userId, _ := getUserId(c)

	var code Message

	if err := c.BindJSON(&code); err != nil {
		c.JSON(http.StatusBadRequest, "Wrong content")
		return
	}

	verified, err := h.services.CheckCodeActivation(userId, code.Code)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	if !verified {
		c.JSON(http.StatusBadRequest, "Code is not correct")
		return
	}

	c.JSON(http.StatusOK, "Successfully")
}
