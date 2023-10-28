package middleware

import (
	customError "PW-Backend/pkgs"
	"errors"

	"github.com/gofiber/fiber/v2"
)

func ErrorHandler(ctx *fiber.Ctx, err error) error {
	// Status code defaults to 500
	code := fiber.StatusInternalServerError

	// Retrieve the custom status code if it's a *fiber.Error
	var e *fiber.Error
	if errors.As(err, &e) {
		code = e.Code
	}

	// Send custom error page
	err = ctx.Status(code).JSON(&customError.CommonError{
		Code:        fiber.StatusInternalServerError,
		Message:     "internal server error",
		ActualError: err.Error(),
	})

	// Return from handler
	return err
}
