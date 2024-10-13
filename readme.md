# Task Manager

<img src="./client/src/assets/Task_manager.gif"/>

## Descrição

O **Task Manager** é um aplicativo projetado para ajudar os usuários a gerenciar sua programação de estudos de forma eficiente. Com ele, é possível adicionar tarefas, marcar atividades como concluídas e excluí-las. Este projeto é desenvolvido utilizando **React** para o frontend e **Node.js** com **MySQL** para o backend.

## Funcionalidades

- **Adicionar Tarefas**: Insira novas tarefas de estudo com informações como título, data, horário e duração.
- **Listar Tarefas**: Visualize todas as tarefas adicionadas em uma lista organizada.
- **Marcar Como Concluídas**: Marque as tarefas que você completou, facilitando o acompanhamento do progresso.
- **Excluir Tarefas**: Remova tarefas que não são mais necessárias.

## Tecnologias Utilizadas

- **Frontend**: React, React Router, Redux
- **Backend**: Node.js, Express
- **Banco de Dados**: MySQL
- **Bibliotecas e Ferramentas**: 
  - Axios (para requisições HTTP)
  - CORS (para permitir requisições de diferentes origens)
  - Body-Parser (para facilitar o processamento de dados no Express)
  - dotenv (para gerenciar variáveis de ambiente)

## Como Executar o Projeto

### Configuração do Banco de Dados

**Criar o Banco de Dados**: Utilize o script `setup.sql` localizado na pasta `server/models` para criar o banco de dados e suas tabelas.

Antes de executar o projeto, você precisa configurar a conexão com o MySQL. No arquivo `taskRoutes.js` localizado na pasta `server/routes`, ajuste o seguinte código:

```javascript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // substitua pelo seu usuário
    password: 'thayanne', // substitua pela sua senha
    database: 'task_manager'
});
```

## Backend

1. Acesse a pasta do servidor:
   ```bash
   cd server
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor:
   ```bash
   node server.js
   ```

## Frontend

1. Acesse a pasta do cliente:
   ```bash
   cd client
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o aplicativo React:
   ```bash
   npm start
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas.
```