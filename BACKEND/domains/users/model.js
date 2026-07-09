// Modelo para validação de login
// Serve para:
// 1) Criar usuário
// 2) Salvar usuário
// 3) Buscar usuário
// 4) Validar login

import { Schema, model} from "mongoose";

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

export default model("User", userSchema);