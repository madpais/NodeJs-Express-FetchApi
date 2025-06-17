
const express = require('express');
const app = express();
//habilitar o processamento de json no corpo das requisições
app.use(express.json()); // Middleware para analisar JSON no corpo das requisições

app.get('/', function (req, res) {
    res.send('Hello, World....!');
});

app.get('/oi', function (req, res) {
    res.send('Olá, mundo!');
});


app.get('/npm-run-dev', function (req, res) {
    res.send('Olá, mundo com Nodemon testando npm run dev.......!');
});

const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

app.get('/herois', function (req, res) {
    res.send('lista: ' + lista);
});

//Post de heróis para a lista -> [POST] /herois
app.post('/herois', function (req, res) {
    console.log(req.body);
    
    const item = req.body.nome;

    lista.push(item);

    res.send('Item adicionado com sucesso');

});


//Read by id -> [GET] /herois/:id
app.get('/herois/:id', function (req, res) {
   // console.log(req.body);
    
   //pegamos inicialmente o parametro id da rota
    const id = req.params.id -1;

    //buscamos o item na lista pelo id
    const item = lista[id];

    //exibimos o item encontrado na resposta
    res.send(item);

});

//Update -> [PUT] /herois/:id
app.put('/herois/:id', function (req, res) {
    //pegamos inicialmente o parametro id da rota
    const id = req.params.id - 1;

    //pegamos o novo nome do herói do corpo da requisição
    const item = req.body.nome;

    //atualizamos o item na lista pelo id
    lista[id] = item;

    //exibimos uma mensagem de sucesso na resposta
    res.send('Item atualizado com sucesso');
});


app.delete('/herois/:id', function (req, res) {
    //pegamos inicialmente o parametro id da rota
    const id = req.params.id - 1;
    //removemos o item da lista pelo id
    lista.splice(id, 1);
    //exibimos uma mensagem de sucesso na resposta
    res.send('Item removido com sucesso');  
});
   

app.listen(3000, function printaConsole() {
    console.log('Servidor rodando em http://localhost:3000' + "rotas");
});




