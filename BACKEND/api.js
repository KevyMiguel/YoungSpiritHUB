// Comentários feitos com base no aprendizado da Hashtag Programação e ChatGPT

// #  Toda vez que acesso uma URL e essa URL é uma A.P.I., eu estou fazendo uma requisição do tipo "GET". 'Cannot GET /' significa: eu não tenho nada aqui que me diga como responder à uma requisição do tipo "GET"

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./config/db.js";
import User from './models/user.js';

const app = express();
const { PORT } = process.env;

// Toda vez que eu der um "GET users" eu quero buscar todas as informações que eu tenho no meu 'collection' (de usuários: "USERS") no banco de dados e quero responder com o que está no código abaixo

// Se eu acessar esse caminho com a req. do tipo GET ele me responderá com um JSON
app.get('/users', async (req, res) => {
    connectDb();

    try {
        const userDoc = await User.find();
        res.json(userDoc);
    } catch (error) {
        res.status(404).json(error);
    }

})

// Endpoint que alimenta o DB
app.post("/users", async (req, res) => {
    connectDb();

    try {
        // Lançar erro para testar o erro 500 ao criar usuário
        // throw new Error("Erro de teste");

        const newUserDoc = await User.create({
            "name": 'Teste',
            "email": 'teste@teste.com',
            "password": '12345678910',
        })   
        res.json();
    } catch (error) {
        // Se o erro for igual à 11000 (onze mil) diga que o email já existe no cadastro do banco de dados
        if (error.code === 11000){
            return res.status(409).json({
                message: "Este e-mail já está cadastrado."
            });

        }
        console.error(error);
        res.status(500).json({
            message: "Não foi possível criar sua conta. Entre em contato com o administrador do site pelo e-mail: kevyfreelancer@gmail.com"
        });
    }

})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
