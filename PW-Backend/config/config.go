package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	AppName string

	Host string
	Port string

	QuotesBaseUrl string
	QuotesApiKey string
}

func InitConfig() *Config  {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error")
	}

	appName := os.Getenv("APP_NAME")
	host := os.Getenv("HOST")
	port := os.Getenv("PORT")
	quotesBaseUrl := os.Getenv("QUOTES_BASE_URL")
	quotesApiKey := os.Getenv("QUOTES_API_KEY")

	return &Config{
		AppName: appName,
		Host: host,
		Port: port,
		QuotesBaseUrl: quotesBaseUrl,
		QuotesApiKey: quotesApiKey,
	}
}