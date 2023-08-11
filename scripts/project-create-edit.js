window.onload = function () {
    //Type: 'create' | 'edit'
    const screenType = 'create';

    // MODO CRIAR
    if (screenType == 'create') {
        document.querySelector('#main-title').innerText = "Vamos cadastrar seu novo projeto!";
        document.querySelector('#action-button').innerText = "Cadastrar";
    }

    //MODO EDITAR
    if (screenType == 'edit') {
        document.querySelector('#main-title').innerText = "Editar projeto";
        document.querySelector('#action-button').innerText = "Salvar"
    }
}
function cadastrar() {
    // inicia a massa de dados
    let payload = {
        title: document.querySelector('#title').value,
        totalCost: document.querySelector('#totalCost').value,
        description: document.querySelector('#description').value,
        idClient: "1"
    }

    // envia para a API
    fetch("https://64d2376af8d60b174361aa4b.mockapi.io/api/projects", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Cotent-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {
            alert('Cadastrado com sucesso!');
        })
}