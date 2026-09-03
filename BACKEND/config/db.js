import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URI } = process.env;

// Testar conexão com o banco de dados via terminal do VS code (no diretório do backend):
// node ./config/db.js

// Função "Async" é uma função que faz com que outra tarefa seja feito enquanto a tarefa principal ainda está em andamento (exemplo: tarefa princial = conectar banco de dados, enquanto isso: printar na tela alguma informação)
// "Await" significa: 'espere esta tarefa terminar e só depois continue'
const connecDb = async () => {
    try {
        mongoose.connect(MONGO_URI);
        console.log("Deu certo ao conectar com o banco!");
    } catch (error){
        console.log("NÃO deu certo ao conectar com o banco!", error);
    }
}


