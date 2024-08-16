# Documentação da API de Backend

Você pode encotrar informações gerais na documentação principal do projeto.

## POST - Cadastrar Cliente - /costumers

Padrão de corpo

```json
{
  "name": "Osvaldo",
  "email": "email@email.com",
  "phone": "1234",
  "x": -10,
  "y": 45
}
```

Padrão de resposta (Status 200)

```json
{
  "id": 1,
  "name": "Osvaldo",
  "email": "email@email.com",
  "phone": "1234",
  "x": -10,
  "y": 45
}
```

### Possíveis erros

- 403 - email já cadastrado
- 422 - conflito de entidade (parâmetros incorretos ou faltantes no corpo)

## GET - Leitura de clientes - /costumers

Padrão de resposta

```json
[
  {
    "id": 1,
    "name": "Osvaldo",
    "email": "email@email.com",
    "phone": "1234",
    "x": -10,
    "y": 45
  }
]
```

### Parâmetros ( Query )

| Parâmetro | Descrição                  |
| --------- | -------------------------- |
| name      | Busca pelo nome do cliente |

## GET - Calcular melhor rota - /costumers/bestroute

Padrão de resposta

```json
{
	"startPoint": {
		"x": 0,
		"y": 0
	},
	"path": [
		{
			"id": 3,
			"name": "João",
			"email": "email2@email.com",
			"phone": "1234",
			"x": 30,
			"y": 20
		},
		{
			"id": 4,
			"name": "Osvaldo",
			"email": "email3@email.com",
			"phone": "1234",
			"x": -10,
			"y": 45
		},
		{
			"id": 2,
			"name": "Alex",
			"email": "email@email.com",
			"phone": "1234",
			"x": 100,
			"y": -50
		}
	]
}
```

Você também pode verificar o funcionamento das rotas no Insomnia, utilizando o arquivo (AtacInsomnia.json)