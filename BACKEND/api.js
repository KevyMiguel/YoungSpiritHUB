// Comentários feitos com base no aprendizado da Hashtag Programação e ChatGPT

// #  Toda vez que acesso uma URL e essa URL é uma A.P.I., eu estou fazendo uma requisição do tipo "GET". 'Cannot GET /' significa: eu não tenho nada aqui que me diga como responder à uma requisição do tipo "GET"

// email: kevy@xyz.com
// senha: Kevy@123

import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from './domains/users/routes.js';

const app = express();
const { PORT } = process.env;

// Middleware (função no meio do caminho) que pegue todas as requisições () que estão sendo enviadas e transforme em um JSON
app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
