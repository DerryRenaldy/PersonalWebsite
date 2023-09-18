package errors

import "fmt"

type CommonError struct {
	Code int `json:"code"`
	Message string `json:"message"`
	ActualError string `json:"error"`
}

type IError interface {
  Error() string
}

func (e *CommonError) Error() string {
	return fmt.Sprintf("Error = %v code := %v errors = %v", e.Message, e.Code, e.ActualError)
}

// GetError code and message then return.
func GetError(errorMessage string, actualError error, code int) *CommonError {
	return &CommonError{
		Code: code,
		Message: errorMessage,
		ActualError: actualError.Error(),
	}
}