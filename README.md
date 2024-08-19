# Teste Atac

Uma aplicação fullstack construída com React (Vite) no front-end e NodeJS (Fastify) no back-end.

## Rodando a aplicação com Docker (Docker Compose)

Você pode rodar está aplicação utilizando Docker Compose

Basta rodar o seguinte comando:

```bash
docker compose up
```

(Está Dockerização foi preparada para ambiente desenvolvimento e não é adequada para deploy)

## Rodando sem o docker

Você também pode rodar essa aplicação sem o Docker, para isso será necessário:

- Node 18+
- Um banco de dados PostgreSQL

### Rodando o backend

Selecione a pasta do backend rodando o comando:

```bash
cd backend
```

Instale as dependências rodando o comando:

```bash
npm install
```

Preencha o arquivo .env dentro do diretório backend seguinte este exemplo:
(Será necessário um banco de dados Postgres)

```
DB_USER=johndoe
DB_PASSWORD=johndoe123
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=atac_teste
```

Rode o respectivo comando para inciar projeto localmente na porta `3001`:

```bash
npm run dev
```

### Rodando o front-end

Selecione a pasta do frontend rodando o comando:

```bash
cd frontend
```

Instale as dependências rodando o comando:

```bash
npm install
```

Rode o respectivo comando para inciar projeto localmente na porta `8080`:

```bash
npm run dev
```