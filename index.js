const express = require('express');
const cors = require('cors'); 
const path = require('path');
const app = express();
const alertasRoutes = require('./routes/alertas'); 

app.use(cors()); 
app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'frontend'))); 

app.use('/alertas', alertasRoutes); 

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); 
});
