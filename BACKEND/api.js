// Originalmente arquivo "index.js", todavia, foi nomeado como 'api.js', pois, 
// aqui onde todo o backend inicia

// Request => Solicitação (req)
// Response => Resposta (res)
// https://reqbin.com
// para testar no reqbin:
// http://localhost:3000/Users

import "dotenv/config" 
import express from "express"
import { connectDB } from "./config/db.js";
import routes from "./domains/users/routes/routes.js"

const app = express();
const { PORT } = process.env;

connectDB();
app.use(express.json());
app.use("/users", routes);

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta: ${PORT} `)
});

// Temporario
app.get("/", (req, res) => {
    res.send("API funcionando");
});