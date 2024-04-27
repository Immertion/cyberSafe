package handler

import (
	service "cyberSafe/pkg/services"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/mandrigin/gin-spa/spa"
)

type Handler struct {
	services *service.Service
}

func NewHandler(services *service.Service) *Handler {
	return &Handler{services: services}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		AllowCredentials: true,
	}))

	router.POST("/sign-up", h.signUp)

	router.POST("/sign-in", h.signIn)

	router.POST("/sign-out", h.signOut)

	activation := router.Group("/activation")
	{
		activation.PUT("/check/:id", h.checkActivationUser)
	}

	user := router.Group("/user")
	{
		user.GET("blockURL", h.GetIconURL)

	}
	wallet := router.Group("/wallet")
	{
		wallet.GET("/balanceETC", h.GetEthBalanceById)
		wallet.GET("/addressETC", h.GetAddressETCById)
		wallet.GET("/gasPrice", h.GetGasPrice)
		wallet.POST("/sendETH", h.SendTransactionETH)

	}

	router.Use(spa.Middleware("/", ".client/out"))

	return router
}
