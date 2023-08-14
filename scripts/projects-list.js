let list = [];

window.onload = function () {
    document.querySelector("#name").innerText = localStorage.getItem("userName");
    document.querySelector("#role").innerText = localStorage.getItem("role");

    getProjects();
}

function getProjects() {
    fetch("https://64d2376af8d60b174361aa4b.mockapi.io/api/projects")
        .then(response => response.json())
        .then(response => {
            list = response;
            buildTable();
        })
}

function goToEdit(id) {
    window.location.href = `project-create-edit.html?id=${id}`;
}

function deleteProject(id) {
    fetch(`https://64d2376af8d60b174361aa4b.mockapi.io/api/projects/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(response => {
            list = list.filter(project => project.id != id);

            buildTable();
        })
}

function buildTable() {
    document.querySelector("#table-body").innerHTML = '';
    const idClient = localStorage.getItem('idClient');

    list = list.filter(element => element.idClient == idClient);

    list.forEach(element => {
        let templete = `
            <div class="row">
                <div class="title-description">
                    <h6 class="title">${element.title}</h6>
                    <p class="description">${element.description}</p>
                </div>
                <div class="price">${element.totalCost}</div>
                <div class="actions">
                    <span class="edit material-icons" onclick="goToEdit(${element.id})">edit</span>
                    <span class=" delete material-icons" onclick="deleteProject(${element.id})">delete_outline</span>
                </div>
            </div>
        `
        document.querySelector("#table-body").insertAdjacentHTML("beforeend", templete)
    })
}

