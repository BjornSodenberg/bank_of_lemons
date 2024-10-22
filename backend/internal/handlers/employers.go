package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/bjornsodenberg/bank_of_lemons/internal/models"
	"github.com/jackc/pgx/v4/pgxpool"
)

func GetEmployers(db *pgxpool.Pool) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		rows, err := db.Query(ctx, "SELECT id, fullname, email, lemons, diamonds FROM employers")
		if err != nil {
			http.Error(w, "Failed to fetch employers", http.StatusInternalServerError)
			log.Printf("Error querying database: %v", err)
			return
		}
		defer rows.Close()

		var employers []models.Employer
		for rows.Next() {
			var e models.Employer
			if err := rows.Scan(&e.ID, &e.Fullname, &e.Email, &e.Lemons, &e.Diamonds); err != nil {
				http.Error(w, "Failed to scan row", http.StatusInternalServerError)
				log.Printf("Error scanning row: %v", err)
				return
			}
			employers = append(employers, e)
		}

		if err := rows.Err(); err != nil {
			http.Error(w, "Error iterating over rows", http.StatusInternalServerError)
			log.Printf("Error iterating over rows: %v", err)
			return
		}

		setJSONHeaders(w)
		json.NewEncoder(w).Encode(employers)
	}
}

func setJSONHeaders(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Content-Security-Policy", "default-src 'self'")
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("X-Content-Type-Options", "nosniff")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
}
