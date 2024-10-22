package models

type Employer struct {
	ID       int    `json:"id"`
	Fullname string `json:"fullname"`
	Email    string `json:"email"`
	Lemons   int    `json:"lemons"`
	Diamonds int    `json:"diamonds"`
}
