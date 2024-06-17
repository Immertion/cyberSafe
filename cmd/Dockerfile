FROM golang:1.22.2

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o main ./cmd

RUN ls -la ./main

EXPOSE 8080

CMD ["go", "run", "cmd/main.go"]