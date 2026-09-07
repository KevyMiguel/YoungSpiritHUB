// POST http://localhost:3000/users = para criar usuários
// POST http://localhost:3000/users/login = para fazer login
// GET  http://localhost:3000/users = para buscar todos os usuários

import User from './model.js';
import bcrypt from "bcryptjs";
import { Router } from "express";
import { connectDb } from "../../config/db.js";

// Gerenciador de rotas do usuário
const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

// Toda vez que eu der um "GET users" eu quero buscar todas as informações que eu tenho no meu 'collection' (de usuários: "USERS") no banco de dados e quero responder com o que está no código abaixo

// Se eu acessar esse caminho com a req. do tipo GET ele me responderá com um JSON
router.get('/', async (req, res) => {
    connectDb();

    try {
        const userDoc = await User.find();
        res.json(userDoc);
    } catch (error) {
        res.status(404).json(error);
    }

})

// Endpoint que alimenta o DB
router.post("/", async (req, res) => {
    connectDb();

    // Estou pegando do objeto "body", da requisição: nome, email e senha
    // Quando o frontend estiver ligado com o backend fará mais sentido
    const { name, email, password, } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

    try {
        // Lançar erro para testar o erro 500 ao criar usuário: throw new Error("Erro de teste");

        const newUserDoc = await User.create({
            name,
            email,
            password: encryptedPassword,
        });   
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

// teste para encontrar o usuário: {
//   "name": "Kevy",
//   "email": "kevy@xyz.com",
//   "password": "Kevy@123"
// }

// login2
// {
//   "email": "teste3@teste3.com",
//   "password": "Teste3"
// }
router.post("/login", async (req, res) => {
    connectDb();

    const { email, password } = req.body;
    
     try {
        // Lançar erro para testar o erro 500 ao criar usuário:
        // throw new Error("Erro de teste");
        const userDoc = await User.findOne({ email: email });

        // Se existir um usuário, vai pro próximo "if/else", aí tem que comparar a senha, e aprovar ou rejeitar o login
        if (userDoc) {
            const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
            // Depois de verificar que o usuário não é um fantasma, verifica se a senha tá correta
            if(passwordCorrect == true){
                res.json(userDoc);
            } else {
                res.status(401).json("Senha inválida!");
            }
        } else {
            res.status(404).json("Usuário não encontrado!");
        }

    } catch (error) {
        res.status(500).json(error)
    }
});

export default router;