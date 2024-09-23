const express = require('express');
const cors = require('cors'); 
const path = require('path');
const app = express();
const alertasRoutes = require('./routes/alertas'); 

app.use(cors()); 
app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

app.use('/alertas', alertasRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
