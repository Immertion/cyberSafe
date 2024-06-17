--
-- PostgreSQL database dump
--

-- Dumped from database version 13.15
-- Dumped by pg_dump version 13.15

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: crypto_keys; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.crypto_keys (
    id integer NOT NULL,
    id_user integer,
    address character varying NOT NULL,
    private_key character varying NOT NULL,
    network character varying NOT NULL
);


ALTER TABLE public.crypto_keys OWNER TO postgres;

--
-- Name: crypto_keys_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.crypto_keys_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.crypto_keys_id_seq OWNER TO postgres;

--
-- Name: crypto_keys_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.crypto_keys_id_seq OWNED BY public.crypto_keys.id;


--
-- Name: transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transactions (
    id integer NOT NULL,
    from_address character varying NOT NULL,
    to_address character varying NOT NULL,
    tx_hash character varying NOT NULL,
    value integer,
    data timestamp without time zone,
    fee integer,
    status character varying(2),
    block_number character varying,
    address_user character varying
);


ALTER TABLE public.transactions OWNER TO postgres;

--
-- Name: transactions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transactions_id_seq OWNER TO postgres;

--
-- Name: transactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transactions_id_seq OWNED BY public.transactions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    login character varying NOT NULL,
    password character varying NOT NULL,
    mail character varying NOT NULL,
    confirmed boolean DEFAULT false,
    activate_code character varying(10),
    iden_icon character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: crypto_keys id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.crypto_keys ALTER COLUMN id SET DEFAULT nextval('public.crypto_keys_id_seq'::regclass);


--
-- Name: transactions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions ALTER COLUMN id SET DEFAULT nextval('public.transactions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: crypto_keys; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.crypto_keys (id, id_user, address, private_key, network) FROM stdin;
1	2	0x36571670965758bC0b7e90bb7ebdD202489Af418	3bb1f2d6b967fff9c01dad43ab5e063044277b9f0773e8e357f24c199fc85adc	ETC
\.


--
-- Data for Name: transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transactions (id, from_address, to_address, tx_hash, value, data, fee, status, block_number, address_user) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, login, password, mail, confirmed, activate_code, iden_icon) FROM stdin;
2	123	686a7172686a7177313234363137616a6668616a7340bd001563085fc35165329ea1ff5c5ecbdbbeef	serbinovich.md@dvfu.ru	t	AYS84J	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAQJJREFUeF7t1LENACAMBLFk/6FBYgSudfprrFd2Zs64b4EF+G33QoDND2D0AwiwCsTeDwQYBWJugQCjQMwtEGAUiLkFAowCMbdAgFEg5hYIMArE3AIBRoGYWyDAKBBzCwQYBWJugQCjQMwtEGAUiLkFAowCMbdAgFEg5hYIMArE3AIBRoGYWyDAKBBzCwQYBWJugQCjQMwtEGAUiLkFAowCMbdAgFEg5hYIMArE3AIBRoGYWyDAKBBzCwQYBWJugQCjQMwtEGAUiLkFAowCMbdAgFEg5hYIMArE3AIBRoGYWyDAKBBzCwQYBWJugQCjQMwtEGAUiLkFAowCMbdAgFEg5he7klABIKTRyAAAAABJRU5ErkJggg==
\.


--
-- Name: crypto_keys_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.crypto_keys_id_seq', 1, true);


--
-- Name: transactions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transactions_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: crypto_keys crypto_keys_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.crypto_keys
    ADD CONSTRAINT crypto_keys_pkey PRIMARY KEY (id);


--
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: crypto_keys crypto_keys_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.crypto_keys
    ADD CONSTRAINT crypto_keys_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

