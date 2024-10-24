package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/bjornsodenberg/bank_of_lemons/internal/models"
	"github.com/jackc/pgx/v4/pgxpool"
)

func GetDepartments(db *pgxpool.Pool) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		rows, err := db.Query(ctx, "SELECT id, name FROM departments")
		if err != nil {
			http.Error(w, "Failed to fetch departments", http.StatusInternalServerError)
			log.Printf("Error querying database: %v", err)
			return
		}
		defer rows.Close()

		var departments []models.Department
		for rows.Next() {
			var e models.Department
			if err := rows.Scan(&e.ID, &e.Name); err != nil {
				http.Error(w, "Failed to scan row", http.StatusInternalServerError)
				log.Printf("Error scanning row: %v", err)
				return
			}
			departments = append(departments, e)
		}

		if err := rows.Err(); err != nil {
			http.Error(w, "Error iterating over rows", http.StatusInternalServerError)
			log.Printf("Error iterating over rows: %v", err)
			return
		}

		setJSONHeaders(w)
		json.NewEncoder(w).Encode(departments)
	}
}
