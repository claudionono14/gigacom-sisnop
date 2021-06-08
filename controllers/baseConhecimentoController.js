const baseConhecimentoController = {

    index: (request, response) => {
        return response.render('baseConhecimento', {titulo: 'SISNOP - Base de Conhecimento'});
    },

    cadastroview: (request, response) => {
        return response.render('baseConhecimentoCadastro', { titulo: 'SISNOP - Formulário de Cadastro'})
    }

}

module.exports = baseConhecimentoController;