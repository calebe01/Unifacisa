const mongoose = require('mongoose');

const PostagemSchema = {
    titulo: String,
    texto: Number
};

module.exports = mongoose.model('Postagem', PostagemSchema);