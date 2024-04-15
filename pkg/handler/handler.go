package handler

import (
	service "cyberSafe/pkg/services"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
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

	wallet := router.Group("/wallet")
	{
		wallet.GET("/etc", h.GetEthBalanceById)
	}

	// router.Use(spa.Middleware("/", "./client/out"))

	return router
}
