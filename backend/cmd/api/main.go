package main

import (
	"log"
	"net/http"
	"os"

	"github.com/bjornsodenberg/bank_of_lemons/internal/database"
	"github.com/bjornsodenberg/bank_of_lemons/internal/handlers"
	"github.com/bjornsodenberg/bank_of_lemons/internal/server"
)

func main() {
	db, err := database.Connect(os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatalf("Unable to connect to database: %v\n", err)
	}
	defer db.Close()

	http.HandleFunc("/orders", handlers.GetOrders(db))
	http.HandleFunc("/employers", handlers.GetEmployers(db))
	http.HandleFunc("/departments", handlers.GetDepartments(db))

	srv := server.New(db)
	log.Println("Server starting on port 8080")
	log.Fatal(srv.Start(":8080"))
}
