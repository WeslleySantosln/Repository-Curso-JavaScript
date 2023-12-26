const express    = require('express');
const exphbs     = require('express-handlebars');
const app        = express();
const path       = require("path")
const db         = require("./db/connection.js");
const bodyParser = require("body-parser");


const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`);
});


// body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");


// handle bars
app.set("views", paht.join(_dirname, "views"));



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

// jobs routes
app.use("/jobs", require("./routes/jobs"));