package handler

import (
	"PW-Backend/dto"
	errors "PW-Backend/pkgs"

	"github.com/gofiber/fiber/v2"
)

func (h *HandlerImpl) GetQuote(c *fiber.Ctx) error{
	functionName := "HandlerImpl/GetQuote"
	ctx := c.Context()

	var payload dto.QuoteRequest
	errBodyParse := c.BodyParser(&payload)
	if errBodyParse != nil {
		h.log.Errorf("%s-ERROR (c.BodyParser)= %s", functionName, errBodyParse)
		return c.Status(fiber.StatusInternalServerError).JSON(&errors.CommonError{
			Code: fiber.StatusInternalServerError,
			Message: "internal server error",
			ActualError: errBodyParse.Error(),
		})
	}

	category := payload.Category

	quote, err := h.service.GetQuotes(ctx, category)
	if err != nil {
		h.log.Errorf("%s-ERROR (h.service.GetQuotes)= %s", functionName, err)
		return c.Status(fiber.StatusInternalServerError).JSON(&errors.CommonError{
			Code: fiber.StatusInternalServerError,
			Message: "internal server error",
			ActualError: err.Error(),
		})
	}

	res := dto.QuoteResponse{
		Code: fiber.StatusOK,
		Message: "success",
		Data: quote,
	}

	return c.Status(fiber.StatusOK).JSON(res)
}