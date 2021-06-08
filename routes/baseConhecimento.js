const express = require('express');
const router = express.Router();
const baseConhecimentoController = require('../controllers/baseConhecimentoController')

//renderizando a home da base de conhecimento
router.get('/home', baseConhecimentoController.index);

router.get('/cadastro', baseConhecimentoController.cadastroview);

module.exports = router;