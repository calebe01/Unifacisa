const express = require('express');
const router = express.Router();
const Postagem = require('../models/postagem');

router.get('/', async (req, res) => { // Lista todos
    res.json(await Postagem.find());
});

router.get('/:id', async (req, res) => { // Lista pelo id
    res.json(await Postagem.findById(req.params.id));
});

router.post('/', async (req, res) => { //Cadastra
    res.json(await new Postagem(req.body).save());
});

router.put('/:id', async (req, res) => { // Altera id
    res.json(await new Postagem.findByIdAndUpdate(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => { // Apaga pelo  id
    res.json(await new Postagem.findByIdAndRemove(req.params.id));
});

module.exports = router;