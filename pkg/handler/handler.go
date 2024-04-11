package handler

import (
	service "cyberSafe/pkg/services"

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

	router.POST("/sign-up", h.signUp)

	router.POST("/sign-in", h.signIn)

	router.POST("/sign-out", h.signOut)

	router.Use(spa.Middleware("/", "./client"))

	return router
}
