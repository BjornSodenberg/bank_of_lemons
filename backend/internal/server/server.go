package server

import (
	"net/http"

	"github.com/jackc/pgx/v4/pgxpool"
)

type Server struct {
	db *pgxpool.Pool
}

func New(db *pgxpool.Pool) *Server {
	return &Server{db: db}
}

func (s *Server) Start(addr string) error {
	return http.ListenAndServe(addr, nil)
}
