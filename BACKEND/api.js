const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        "id": 1,
        "title": "My devotional",
        "author": "Kevy"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
