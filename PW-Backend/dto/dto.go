package dto

type Quotes struct {
	Quote string `json:"quote"`
	Author string `json:"author"`
}

type QuoteResponse struct {
  Code int `json:"code"`
  Message string `json:"message"`
  Data *Quotes `json:"data"`
}

type QuoteRequest struct {
  Category string `json:"category"`
}
