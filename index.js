
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello, World....!');
});

app.get('/oi', function (req, res) {
    res.send('Olá, mundo!');
});


app.listen(3000, function printaConsole() {
    console.log('Servidor rodando em http://localhost:3000');
});








// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send({ mensagem: 'Olá do servidor!' });
// });

// app.listen(3000, () => {
//   console.log('Servidor rodando em http://localhost:3000');
// });
