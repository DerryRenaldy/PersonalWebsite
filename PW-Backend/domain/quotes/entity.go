package quotes

type QuoteEntity struct {
	Quote string `json:"quote"`
	Author string `json:"author"`
	Category string `json:"category"`
}