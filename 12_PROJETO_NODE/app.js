const express = require('express');
const app = express();
const db = require("./db/connection");

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`);
});

// db connection

db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco de dados com sucesso");    
    })
    .catch(err => {
        console.log("Erro ao conectar", err);
    });

// routes
app.get('/', (req, res) =>{
    res.send("Está funcionando 3");    

});