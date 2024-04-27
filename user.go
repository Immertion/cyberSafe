package structs

type User struct {
	Id             int    `json:"id" db:"id"`
	Login          string `json:"login"`
	Mail           string `json:"mail" binding:"required" db:"mail"`
	Password       string `json:"password" binding:"required"`
	BlockURL       string `json:"icon_url" binding:"required"`
	Confirmed      bool   `json:"confirmed"`
	CodeActivation string `json:"activation_code"`
}

type UpdateUserInput struct {
	Id    *int   `json:"id"`
	Login string `json:"login"`
	Mail  string `json:"mail" binding:"required" db:"mail"`
}
