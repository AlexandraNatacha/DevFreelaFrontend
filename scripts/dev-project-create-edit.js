window.onload = function () {
    //Type: 'create' | 'edit'
    const screenType = 'create';

    // MODO CRIAR
    if (screenType == 'create') {
        document.querySelector('#main-title').innerText = "Vamos cadastrar um novo projeto!";
        document.querySelector('#action-button').innerText = "Cadastrar";
    }

    //MODO EDITAR
    if (screenType == 'edit') {
        document.querySelector('#main-title').innerText = "Editar projeto";
        document.querySelector('#action-button').innerText = "Salvar"
    }
}