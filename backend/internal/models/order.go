package models

import (
	"encoding/json"
	"time"
)

type Order struct {
	ID        int             `json:"id"`
	UserId    int             `json:"userid"`
	CreatedAt time.Time       `json:"createdat"`
	Products  json.RawMessage `json:"products"`
	Status    string          `json:"status"`
}
