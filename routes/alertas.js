const express = require('express');
const router = express.Router();

let alertas = [
    { id: 1, tipo: 'enchente', descricao: 'Alerta de enchente na região central', data: '2024-07-22', local: 'região central', gravidade: 'alta', ativo: true },
    { id: 2, tipo: 'deslizamento', descricao: 'Possibilidade de deslizamento no bairro Serra', data: '2024-07-15', local: 'bairro Serra', gravidade: 'média', ativo: true },
    { id: 3, tipo: 'tempestade', descricao: 'Tempestade forte prevista para o bairro Savassi', data: '2024-07-18', local: 'bairro Savassi', gravidade: 'alta', ativo: false },
    { id: 4, tipo: 'enchente', descricao: 'Enchente na região norte', data: '2024-07-12', local: 'região norte', gravidade: 'alta', ativo: true },
    { id: 5, tipo: 'deslizamento', descricao: 'Deslizamento na região oeste', data: '2024-07-08', local: 'região oeste', gravidade: 'baixa', ativo: false },
    { id: 6, tipo: 'tempestade', descricao: 'Tempestade leve na região leste', data: '2024-07-20', local: 'região leste', gravidade: 'baixa', ativo: true },
    { id: 7, tipo: 'enchente', descricao: 'Enchente no bairro Centro-Sul', data: '2024-07-25', local: 'bairro Centro-Sul', gravidade: 'alta', ativo: true },
    { id: 8, tipo: 'deslizamento', descricao: 'Deslizamento na região sul', data: '2024-07-17', local: 'região sul', gravidade: 'média', ativo: true },
    { id: 9, tipo: 'tempestade', descricao: 'Tempestade severa na região norte', data: '2024-07-10', local: 'região norte', gravidade: 'alta', ativo: false },
    { id: 10, tipo: 'enchente', descricao: 'Alerta de enchente no bairro São Pedro', data: '2024-07-14', local: 'bairro São Pedro', gravidade: 'alta', ativo: true }
];

router.get('/', (req, res) => {
    res.json(alertas);
});

router.get('/:id', (req, res) => {
    const alerta = alertas.find(a => a.id == req.params.id);
    if (alerta) {
        res.json(alerta);
    } else {
        res.status(404).send('Alerta não encontrado');
    }
});

router.post('/', (req, res) => {
    const novoAlerta = {
        id: alertas.length + 1,
        ...req.body
    };
    alertas.push(novoAlerta);
    res.status(201).json(novoAlerta);
});

router.put('/:id', (req, res) => {
    const alerta = alertas.find(a => a.id == req.params.id);
    if (alerta) {
        Object.assign(alerta, req.body);
        res.json(alerta);
    } else {
        res.status(404).send('Alerta não encontrado');
    }
});

router.delete('/:id', (req, res) => {
    const index = alertas.findIndex(a => a.id == req.params.id);
    if (index !== -1) {
        alertas.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Alerta não encontrado');
    }
});

module.exports = router;