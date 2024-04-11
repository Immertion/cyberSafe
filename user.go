package structs

type User struct {
	Id        int    `json:"id" db:"id"`
	Login     string `json:"login"`
	Mail      string `json:"mail" binding:"required" db:"email"`
	Password  string `json:"password" binding:"required"`
	Confirmed bool   `json:"confirmed" binding:"required"`
}

type UpdateUserInput struct {
	Id    *int   `json:"id"`
	Login string `json:"login"`
	Mail  string `json:"mail" binding:"required" db:"email"`
}
