package service

import (
	"PW-Backend/dto"
	"context"
)

func (s *ServiceImpl) GetQuotes(ctx context.Context, category string) (resp *dto.Quotes, err error){
	functionName := "ServiceImpl/GetQuotes"

	quote, err := s.quoteRepo.GetQuotes(ctx, category)
	if err != nil {
		s.log.Errorf("%s-ERROR (s.quoteRepo.GetQuotes)= %s", functionName, err)
		return nil, err
	}

	result := dto.Quotes{
		Quote: quote.Quote,
		Author: quote.Author,
	}

	return &result, nil
}