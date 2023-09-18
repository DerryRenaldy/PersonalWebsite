package quotes

import (
	errors "PW-Backend/pkgs"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
)

func (q *QuotesImpl) GetQuotes(ctx context.Context, category string) (resp *QuoteEntity, err error){
	functionName := "QuotesImpl/GetQuotes"
	url := url.URL{
		Scheme: "https",
		Host: q.cfg.QuotesBaseUrl,
		Path: "v1/quotes",
	}

	url.Query().Add("category", category)
	fmt.Println(url.String())

	req, err := http.NewRequest("GET", q.cfg.QuotesBaseUrl + "v1/quotes/?category" + category, nil)
	if err != nil {
		q.log.Errorf("%s-ERROR (http.NewRequest)= %s", functionName, err)
		return nil, errors.GetError("internal server error", err, http.StatusInternalServerError)
	}

	req.Header = http.Header{
		"X-Api-Key": {q.cfg.QuotesApiKey},
		"Content-Type": {"application/json"},
	}

	res , err := q.client.Do(req)
	if err != nil {
		q.log.Errorf("%s-ERROR (q.client.Do)= %s", functionName, err)
		return nil, errors.GetError("internal server error", err, http.StatusInternalServerError)
	}
	defer res.Body.Close()

	out, err := io.ReadAll(res.Body)
	if err != nil {
		q.log.Errorf("%s-ERROR (io.ReadAll)= %s", functionName, err)
		return nil, errors.GetError("internal server error", err, http.StatusInternalServerError)
	}

	q.log.Infof("Quotes = %s", out)

	var quote []QuoteEntity
	if err := json.Unmarshal(out, &quote); err != nil {
		q.log.Errorf("%s-ERROR (json.Unmarshal)= %s", functionName, err)
		return nil, errors.GetError("internal server error", err, http.StatusInternalServerError)
	}

	q.log.Infof("Quotes = %s", quote[0].Quote)

	return &quote[0], nil
}