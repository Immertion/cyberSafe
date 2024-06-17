package handler

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"cyberSafe"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

type MockServices struct {
	mock.Mock
}

func (m *MockServices) CreateUser(user cyberSafe.User) (int, error) {
	args := m.Called(user)
	return args.Int(0), args.Error(1)
}

func (m *MockServices) SendCodeActivation(userId int) error {
	args := m.Called(userId)
	return args.Error(0)
}

func (m *MockServices) GenerateToken(email, password string) (string, error) {
	args := m.Called(email, password)
	return args.String(0), args.Error(1)
}

func (m *MockServices) ParseToken(token string) (int, bool, error) {
	args := m.Called(token)
	return args.Int(0), args.Bool(1), args.Error(2)
}

func (m *MockServices) CheckCodeActivation(userId int, code, blockURL string) (bool, error) {
	args := m.Called(userId, code, blockURL)
	return args.Bool(0), args.Error(1)
}

func (m *MockServices) GenerateKeysById(userId int, currency string) error {
	args := m.Called(userId, currency)
	return args.Error(0)
}

func TestSignUp(t *testing.T) {
	gin.SetMode(gin.TestMode)

	mockServices := new(MockServices)
	handler := &Handler{services: mockServices}

	r := gin.Default()
	r.POST("/signup", handler.signUp)

	user := cyberSafe.User{
		Email:    "test@example.com",
		Password: "password",
	}

	jsonValue, _ := json.Marshal(user)
	req, _ := http.NewRequest(http.MethodPost, "/signup", bytes.NewBuffer(jsonValue))
	w := httptest.NewRecorder()

	mockServices.On("CreateUser", user).Return(1, nil)
	mockServices.On("SendCodeActivation", 1).Return(nil)

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	var response map[string]interface{}
	json.Unmarshal(w.Body.Bytes(), &response)
	assert.Equal(t, float64(1), response["id"])

	mockServices.AssertExpectations(t)
}

func TestSignIn(t *testing.T) {
	gin.SetMode(gin.TestMode)

	mockServices := new(MockServices)
	handler := &Handler{services: mockServices}

	r := gin.Default()
	r.POST("/signin", handler.signIn)

	input := signInInput{
		Email:    "test@example.com",
		Password: "password",
	}

	jsonValue, _ := json.Marshal(input)
	req, _ := http.NewRequest(http.MethodPost, "/signin", bytes.NewBuffer(jsonValue))
	w := httptest.NewRecorder()

	token := "mockToken"
	mockServices.On("GenerateToken", input.Email, input.Password).Return(token, nil)
	mockServices.On("ParseToken", token).Return(1, true, nil)

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	var response map[string]interface{}
	json.Unmarshal(w.Body.Bytes(), &response)
	assert.Equal(t, token, response["token"])

	mockServices.AssertExpectations(t)
}

func TestSignOut(t *testing.T) {
	gin.SetMode(gin.TestMode)

	mockServices := new(MockServices)
	handler := &Handler{services: mockServices}

	r := gin.Default()
	r.POST("/signout", handler.signOut)

	req, _ := http.NewRequest(http.MethodPost, "/signout", nil)
	w := httptest.NewRecorder()

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	assert.Equal(t, "ok", w.Body.String())
}

func TestCheckActivationUser(t *testing.T) {
	gin.SetMode(gin.TestMode)

	mockServices := new(MockServices)
	handler := &Handler{services: mockServices}

	r := gin.Default()
	r.POST("/check_activation", handler.checkActivationUser)

	code := Message{
		Code:     "activationCode",
		BlockURL: "blockURL",
	}

	jsonValue, _ := json.Marshal(code)
	req, _ := http.NewRequest(http.MethodPost, "/check_activation", bytes.NewBuffer(jsonValue))
	w := httptest.NewRecorder()

	mockServices.On("CheckCodeActivation", mock.Anything, code.Code, code.BlockURL).Return(true, nil)
	mockServices.On("GenerateKeysById", mock.Anything, "ETC").Return(nil)

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	assert.Equal(t, "\"Successfully\"\n", w.Body.String())

	mockServices.AssertExpectations(t)
}
