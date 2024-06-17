-- Создание таблицы users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    login VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    mail VARCHAR NOT NULL,
    confirmed BOOLEAN DEFAULT FALSE,
    activate_code VARCHAR(10),
    iden_icon VARCHAR
);

-- Создание таблицы crypto_keys
CREATE TABLE crypto_keys (
    id SERIAL PRIMARY KEY,
    id_user INT REFERENCES users(id),
    address VARCHAR NOT NULL,
    private_key VARCHAR NOT NULL,
    network VARCHAR NOT NULL
);

-- Создание таблицы transactions
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    from_address VARCHAR NOT NULL,
    to_address VARCHAR NOT NULL,
    tx_hash VARCHAR NOT NULL,
    value INT,
    data TIMESTAMP,
    fee INT,
    status VARCHAR(2),
    block_number VARCHAR,
    address_user VARCHAR
);
