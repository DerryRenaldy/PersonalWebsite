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

	Environment string

	QuotesBaseUrl string
	QuotesApiKey string

	SpotifyClientId string
	SpotifyClientSecret string
}

func InitConfig() *Config  {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error")
	}

	appName := os.Getenv("APP_NAME")
	host := os.Getenv("HOST")
	port := os.Getenv("PORT")
	environment:=os.Getenv("ENVIRONMENT")
	quotesBaseUrl := os.Getenv("QUOTES_BASE_URL")
	quotesApiKey := os.Getenv("QUOTES_API_KEY")
	spotifyClientId := os.Getenv("SPOTIFY_CLIENT_ID")
	spotifyClientSecret := os.Getenv("SPOTIFY_CLIENT_SECRET")

	return &Config{
		AppName: appName,
		Host: host,
		Port: port,
		Environment: environment,
		QuotesBaseUrl: quotesBaseUrl,
		QuotesApiKey: quotesApiKey,
		SpotifyClientId: spotifyClientId,
		SpotifyClientSecret: spotifyClientSecret,
	}
}