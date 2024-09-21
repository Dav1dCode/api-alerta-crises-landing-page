const express = require('express');
const path = require('path');
const app = express();
const alertasRoutes = require('./alertas');

app.use(express.json());

app.use(express.static(path.join(__dirname)));


app.get('/landing', (req, res) => {
    res.sendFile(path.join(__dirname, 'landing.html'));
});

app.get('/', (req, res) => {
    res.send('Bem-vindo ao sistema de alerta de crises de Belo Horizonte');
});

app.use('/alertas', alertasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
