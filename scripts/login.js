function checkIfAnyRoleIsChecked() {
    let list = document.getElementsByName("role");
    let counter = 0;

    for (let radioButton of list) {
        if (radioButton.checked === false) {
            counter++;
        }
    }

    return counter !== list.length;
}

function cadastrar() {
    // Checa se alguma role foi checada.
    if (checkIfAnyRoleIsChecked() === false) {
        Swal.fire(
            'Algo deu errado...',
            'Marque alguma role!',
            'error'
        )
        return;
    }

    // Inicia a massa de dados (payload)
    let payload = {
        role: document.getElementsByName("role")[0].checked == true ? 'dev' : 'cliente',
        fullName: document.querySelector("#fullName").value,
        birthdate: document.querySelector("#birthdate").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    // Enviar para API
    fetch("https://64d2376af8d60b174361aa4b.mockapi.io/api/users", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {
            Swal.fire({
                title: 'Bom trabalho!',
                text: 'Cadastrado com sucesso!',
                icon: 'success',
                confirmButtonText: 'Ok!'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.setItem("userName", response.fullName);
                    localStorage.setItem("role", response.role === 'dev' ? "Desenvolvedor" : "Cliente");
                    localStorage.setItem("idClient", response.id);

                    window.location = "projects-list.html";
                }
            })
        })
}