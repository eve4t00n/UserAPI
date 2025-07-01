# 🧑‍💻 Sistema De Cadastro De Usuários (CRUD)

Este projeto é um sistema básico de CRUD (Create, Read, Update, Delete) para gerenciamento de usuários, desenvolvido com Node.js e Express. Ele permite cadastrar, visualizar, atualizar e remover usuários de um banco de dados de forma simples e eficiente. A API fornece dados para serem consumidos por um front-end que será produzido em breve!

## 🔧 Funcionalidades
- Cadastrar Usuário – Criação de novos usuários no sistema.

- Listar Usuários – Exibição de todos os usuários cadastrados.

- Atualizar Usuário – Edição dos dados de um usuário existente.

- Remover Usuário – Exclusão de um usuário do sistema.

## 📦 Tecnologias Utilizadas
- Node.js

- Express

- Sequelize (ORM)

- SQLite

- Nodemon (ambiente de desenvolvimento)

## Estrutura do Projeto
```
/models        → Modelos do Sequelize
/routes        → Rotas da aplicação
/database      → Configuração do banco de dados
app.js         → Arquivo principal do servidor
```

## Executar o Projeto
Obs: É necessário ter o Node.js instalado na máquina

```
# Instale as dependências
npm install

# Execute o servidor
npm start
```

A aplicação estará disponível em: http://localhost:3000
É possível testar usando um software de testes de API.
É importante estar com o servidor rodando para realizar os testes.

### Requisições

- Listar usuários

```
Method: GET
URL: http://localhost:3000/index
```

- Cadastrar usuário

```
Method: POST
URL: http://localhost:3000/index/cadastrar
```

- Atualizar usuário

```
Em breve
```

- Remover usuário

```
Method: DELETE
URL: http://localhost:3000/index/remover
```
