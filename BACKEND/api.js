// Comentários feitos com base no aprendizado da Hashtag Programação e ChatGPT

// Toda vez que acesso uma URL de uma API, estou fazendo uma requisição.
// Se eu não criei uma rota para responder àquela requisição, o Express
// pode responder com "Cannot GET /".

// email: kevy@xyz.com
// senha: Kevy@123

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from './domains/users/routes.js';
import cors from 'cors';

const app = express();
const { PORT } = process.env;

// Middleware: uma função que fica no caminho entre a requisição
// e a resposta. O express.json() permite que o Express leia
// dados enviados em JSON no corpo das requisições.
app.use(express.json());

// Middleware que permite que o frontend faça requisições
// para o backend mesmo estando em uma origem diferente.
app.use(cors());

app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
