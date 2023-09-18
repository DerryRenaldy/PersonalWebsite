package service

import (
	"PW-Backend/domain/quotes"
	"PW-Backend/dto"
	"context"

	"github.com/DerryRenaldy/logger/logger"
)

type IService interface {
	GetQuotes(ctx context.Context, category string) (resp *dto.Quotes, err error)
}

type ServiceImpl struct {
	log logger.ILogger
	quoteRepo quotes.IQuotes
}

var _ IService = (*ServiceImpl)(nil)

func NewServiceImpl(log logger.ILogger, quoteRepo quotes.IQuotes) *ServiceImpl{
	return &ServiceImpl{
		log: log,
		quoteRepo: quoteRepo,
	}
}