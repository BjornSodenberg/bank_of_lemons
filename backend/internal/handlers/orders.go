package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/bjornsodenberg/bank_of_lemons/internal/models"
	"github.com/jackc/pgx/v4/pgxpool"
)

func GetOrders(db *pgxpool.Pool) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		rows, err := db.Query(ctx, "SELECT id, userid, createdat, products, status FROM orders WHERE status = 'ACTIVE'")
		if err != nil {
			http.Error(w, "Failed to fetch orders", http.StatusInternalServerError)
			log.Printf("Error querying database: %v", err)
			return
		}
		defer rows.Close()

		var orders []models.Order
		for rows.Next() {
			var o models.Order
			if err := rows.Scan(&o.ID, &o.UserId, &o.CreatedAt, &o.Products, &o.Status); err != nil {
				http.Error(w, "Failed to scan row", http.StatusInternalServerError)
				log.Printf("Error scanning row: %v", err)
				return
			}
			orders = append(orders, o)
		}

		if err := rows.Err(); err != nil {
			http.Error(w, "Error iterating over rows", http.StatusInternalServerError)
			log.Printf("Error iterating over rows: %v", err)
			return
		}

		setJSONHeaders(w)
		if err := json.NewEncoder(w).Encode(orders); err != nil {
			http.Error(w, "Error encoding response", http.StatusInternalServerError)
			log.Printf("Error encoding response: %v", err)
			return
		}
	}
}
