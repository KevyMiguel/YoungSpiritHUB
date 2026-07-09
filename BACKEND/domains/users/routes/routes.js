// Mesmo chamando de “routes”, isso não representa uma página no navegador.
// Essas rotas são endpoints da API, como /users, que servem dados para o frontend (React).
// As páginas são definidas no App.jsx, enquanto aqui no backend só lidamos com requisições e respostas.

import { Router } from "express";
import User from "../model.js";
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

// router.get("/");
// router.post("/");




router.get('/users', async (req, res) =>{
    try {
        const userDoc = await User.find();
        res.json(userDoc);
    } catch (error) {
        res.status(404).json(error);
    }

});

router.post("/users", async (req, res) => {
    const { name, email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

    try {
        const newUserDoc = await User.create({
            name,
            email,
            password: encryptedPassword,
        })
        res.status(201).json(newUserDoc);
    } catch (error) {
        if(error.code === 11000){
            return res.status(409).json({
                error: "Email já existe"
            });
        }
        res.status(409).json(error);
    }

});

export default router;