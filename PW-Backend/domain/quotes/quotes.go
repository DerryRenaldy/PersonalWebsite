package quotes

import (
	"PW-Backend/config"
	"context"
	"net/http"

	"github.com/DerryRenaldy/logger/logger"
)

type IQuotes interface {
	GetQuotes(ctx context.Context, category string) (resp *QuoteEntity, err error)
}

type QuotesImpl struct {
	client http.Client
	log logger.ILogger
	cfg config.Config
}

func NewQuotesImpl (cfg config.Config, log logger.ILogger) *QuotesImpl {
	return &QuotesImpl{
		client: http.Client{},
		cfg: cfg,
		log: log,
	}
}