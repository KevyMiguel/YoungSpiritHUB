// Comentários feitos com base no aprendizado da Hashtag Programação e ChatGPT

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const { PORT } = process.env;

// Toda vez que acesso uma URL e essa URL é uma A.P.I., eu estou fazendo uma requisição do tipo "GET"
// 'Cannot GET /' significa: eu não tenho nada aqui que me diga como responder à uma requisição do tipo "GET"

// Se eu acessar esse caminho com a req. do tipo GET ele me responderá com um JSON
app.get('/', (req, res) => {
    res.json({ ola: "Olá, Mundo!"});
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
