// handler_balance_test.go
package handler

import (
	"bytes"
	"encoding/json"
	"math/big"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

type MockBalanceServices struct {
	mock.Mock
}

func (m *MockBalanceServices) GetBalanceETC(userId int) (*big.Float, *big.Float, error) {
	args := m.Called(userId)
	return args.Get(0).(*big.Float), args.Get(1).(*big.Float), args.Error(2)
}

func (m *MockBalanceServices) GetAddressETC(userId int) (string, error) {
	args := m.Called(userId)
	return args.String(0), args.Error(1)
}

func (m *MockBalanceServices) GetBalanceUSDT(userId int) (*big.Float, error) {
	args := m.Called(userId)
	return args.Get(0).(*big.Float), args.Error(1)
}

func (m *MockBalanceServices) GetAddressGasUsd() (string, error) {
	args := m.Called()
	return args.String(0), args.Error(1)
}

func (m *MockBalanceServices) CreateTransaction(userId int, amount float64, address string) (string, error) {
	args := m.Called(userId, amount, address)
	return args.String(0), args.Error(1)
}

func (m *MockBalanceServices) GetIdenIcon(userId int) (string, error) {
	args := m.Called(userId)
	return args.String(0), args.Error(1)
}

func TestGetEthBalanceById(t *testing.T) {
	gin.SetMode(gin.TestMode)

	mockServices := new(MockBalanceServices)
	handler := &Handler{services: mockServices}

	r := gin.Default()
	r.GET("/balance", handler.GetEthBalanceById)

	mockBalanceEtc := big.NewFloat(1.23)
	mockBalanceUsd := big.NewFloat(123.45)
	mockServices.On("GetBalanceETC", 1).Return(mockBalanceEtc, mockBalanceUsd, nil)

	req, _ := http.NewRequest(http.MethodGet, "/balance", nil)
	req.Header.Set("Authorization", "Bearer mockToken")
	w := httptest.NewRecorder()

	parseJWT = func(h *Handler, token string) (int, bool, error) {
		return 1, true, nil
	}

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	var response Balance
	json.Unmarshal(w.Body.Bytes(), &response)
	assert.Equal(t, 1.23, response.BalanceCrypto)
	assert.Equal(t, mockBalanceUsd, response.ConvertToUsd)

	mockServices.AssertExpectations(t)
}

func TestGetAddressETCById(t *testing.T) {
	gin.SetMode(gin.TestMode)

	mockServices := new(MockBalanceServices)
	handler := &Handler{services: mockServices}

	r := gin.Default()
	r.GET("/address", handler.GetAddressETCById)

	mockAddress := "0xMockAddress"
	mockServices.On("GetAddressETC", 1).Return(mockAddress, nil)

	req, _ := http.NewRequest(http.MethodGet, "/address", nil)
	req.Header.Set("Authorization", "Bearer mockToken")
	w := httptest.NewRecorder()

	parseJWT = func(h *Handler, token string) (int, bool, error) {
		return 1, true, nil
	}

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	var response string
	json.Unmarshal(w.Body.Bytes(), &response)
	assert.Equal(t, mockAddress, response)

	mockServices.AssertExpectations(t)
}

func TestGetUSDTBalanceById(t *testing.T) {
	gin.SetMode(gin.TestMode)

	mockServices := new(MockBalanceServices)
	handler := &Handler{services: mockServices}

	r := gin.Default()
	r.GET("/usdt_balance", handler.GetUSDTBalanceById)

	mockBalanceUSDT := big.NewFloat(456.78)
	mockServices.On("GetBalanceUSDT", 1).Return(mockBalanceUSDT, nil)

	req, _ := http.NewRequest(http.MethodGet, "/usdt_balance", nil)
	req.Header.Set("Authorization", "Bearer mockToken")
	w := httptest.NewRecorder()

	parseJWT = func(h *Handler, token string) (int, bool, error) {
		return 1, true, nil
	}

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	var response *big.Float
	json.Unmarshal(w.Body.Bytes(), &response)
	assert.Equal(t, mockBalanceUSDT, response)

	mockServices.AssertExpectations(t)
}

func TestGetGasPrice(t *testing.T) {
	gin.SetMode(gin.TestMode)

	mockServices := new(MockBalanceServices)
	handler := &Handler{services: mockServices}

	r := gin.Default()
	r.GET("/gas_price", handler.GetGasPrice)

	mockGasPrice := "mockGasPrice"
	mockServices.On("GetAddressGasUsd").Return(mockGasPrice, nil)

	req, _ := http.NewRequest(http.MethodGet, "/gas_price", nil)
	w := httptest.NewRecorder()

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	var response string
	json.Unmarshal(w.Body.Bytes(), &response)
	assert.Equal(t, mockGasPrice, response)

	mockServices.AssertExpectations(t)
}

func TestSendTransactionETH(t *testing.T) {
	gin.SetMode(gin.TestMode)

	mockServices := new(MockBalanceServices)
	handler := &Handler{services: mockServices}

	r := gin.Default()
	r.POST("/send_transaction", handler.SendTransactionETH)

	mockTxHash := "mockTxHash"
	mockServices.On("CreateTransaction", 1, 100.0, "0xMockAddress").Return(mockTxHash, nil)

	input := sendDataTransaction{
		Address: "0xMockAddress",
		Amount:  100.0,
	}
	jsonValue, _ := json.Marshal(input)
	req, _ := http.NewRequest(http.MethodPost, "/send_transaction", bytes.NewBuffer(jsonValue))
	req.Header.Set("Authorization", "Bearer mockToken")
	w := httptest.NewRecorder()

	parseJWT = func(h *Handler, token string) (int, bool, error) {
		return 1, true, nil
	}

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	var response string
	json.Unmarshal(w.Body.Bytes(), &response)
	assert.Equal(t, mockTxHash, response)

	mockServices.AssertExpectations(t)
}

func TestGetIconURL(t *testing.T) {
	gin.SetMode(gin.TestMode)

	mockServices := new(MockBalanceServices)
	handler := &Handler{services: mockServices}

	r := gin.Default()
	r.GET("/icon_url", handler.GetIconURL)

	mockIconURL := "mockIconURL"
	mockServices.On("GetIdenIcon", 1).Return(mockIconURL, nil)

	req, _ := http.NewRequest(http.MethodGet, "/icon_url", nil)
	req.Header.Set("Authorization", "Bearer mockToken")
	w := httptest.NewRecorder()

	parseJWT = func(h *Handler, token string) (int, bool, error) {
		return 1, true, nil
	}

	r.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
	var response string
	json.Unmarshal(w.Body.Bytes(), &response)
	assert.Equal(t, mockIconURL, response)

	mockServices.AssertExpectations(t)
}
