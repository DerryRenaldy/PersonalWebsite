package handler

import (
	"PW-Backend/api/service"

	"github.com/DerryRenaldy/logger/logger"
	"github.com/gofiber/fiber/v2"
)

type IHandler interface {
	GetQuote(c *fiber.Ctx) error
}

type HandlerImpl struct {
	log       logger.ILogger
	service service.IService
}

func NewHandlerImpl(log logger.ILogger, service service.IService) *HandlerImpl {
	return &HandlerImpl{
		log: log,
		service: service,
	}
}
