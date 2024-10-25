const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//rota 1
app.get("/", function(req,res){
    res.send("<h1>Bem vindo a primeira rota!</h1>");
})

//rota 2
app.get("/rota2", function(req,res){
    res.send("<h1>Rota 2!</h1>");
})

//rota 3 com parametro 
app.get("/rota3/:parametro", function(req,res){
    res.send("retorno da rota 3" + req.params.parametro);
})

app.listen(process.env.PORT ?? 1000,function(erro){  // cria a aplicação na porta 1000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Modificação deu certo.");
    }
})