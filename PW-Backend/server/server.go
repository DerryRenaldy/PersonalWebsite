package server

import (
	"PW-Backend/api/handler"
	"PW-Backend/api/service"
	"PW-Backend/config"
	"PW-Backend/domain/quotes"
	"log"

	"github.com/DerryRenaldy/logger/logger"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

type Server struct {
	log logger.ILogger
	quotesRepo quotes.IQuotes
	service service.IService
	handler handler.IHandler
}

var SVR *Server

func New(logger logger.ILogger, cfg config.Config) *Server {
	if SVR != nil {
		return SVR
	}
	SVR = &Server{
		log: logger,
	}

	SVR.Register(cfg)

	return SVR
}

func (s *Server) Register(cfg config.Config) {
	s.quotesRepo = quotes.NewQuotesImpl(cfg, s.log)
	s.service = service.NewServiceImpl(s.log, s.quotesRepo)
	s.handler = handler.NewHandlerImpl(s.log, s.service)
}

func (s Server) Start() {
	app := fiber.New(fiber.Config{
		Immutable: true,
	})

	v1 := app.Group("/api/v1")
	v1.Use(recover.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173",
		AllowHeaders:  "Origin, Content-Type, Accept",
	}))

	v1.Get("/quotes", s.handler.GetQuote)

	log.Print("App started successfully and is listening for HTTP requests on $PORT")

	app.Listen(":3000")
}