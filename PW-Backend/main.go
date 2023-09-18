package main

import (
	"PW-Backend/config"
	"PW-Backend/server"

	"github.com/DerryRenaldy/logger/logger"
)

func main(){
	cfg := config.InitConfig()
	log := logger.New(cfg.AppName, "development", "debug")
	newServer := server.New(log, *cfg)
	newServer.Start()
}