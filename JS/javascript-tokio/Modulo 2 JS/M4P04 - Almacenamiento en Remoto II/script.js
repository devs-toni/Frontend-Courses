const customFetch = (endpoint, options) => {
    const defaultHeader = {
        accept: "application/json"
    }
    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 2000);

    return fetch(endpoint, options)
        .then(res => res.ok ? res.json() : null);
}

const get = (url, options = {}) => {
    return customFetch(url, options);
}

const del = (url, options = {}) => {
    options.method = "DELETE";
    customFetch(url, options);
}

function charge() {
    for (let index = 1; index <= 20; index++) {
        chargePhotos(index);
    }
}

function chargePhotos(id) {
    get("https://jsonplaceholder.typicode.com/photos/" + id).then(response => {
        console.log(response);
        paintTable(response);
    });
}

function paintTable(json) {
    if (json.id !== undefined) {
        var body = document.getElementById("body");
        var fila = document.createElement("tr");
        fila.setAttribute("id", json.id);
        var id = document.createElement("td");
        var titulo = document.createElement("td");
        var url = document.createElement("td");
        let del = document.createElement("td");
        id.innerText = json.id;
        titulo.innerText = json.title;
        url.innerText = json.thumbnailUrl;
        let btn = document.createElement("button");
        btn.textContent = "Eliminar";
        btn.onclick = function () {
            deletePhotos(json.id);
        };
        del.appendChild(btn);
        fila.appendChild(id);
        fila.appendChild(titulo);
        fila.appendChild(url);
        fila.appendChild(del);
        body.appendChild(fila);
    }
}

function deletePhotos(id) {
    document.getElementById(id).remove();
    del("https://jsonplaceholder.typicode.com/photos/" + id);
}

const refreshTable = () => {
    var body = document.getElementById("body");
    var id = document.createElement("td");
    var titulo = document.createElement("td");
    var url = document.createElement("td");
    var fila = document.createElement("tr");
    id.innerText = 1;
    titulo.innerText = 'Antonio Rufino Casasus';
    url.innerText = 'https://cursos.com/wp-content/uploads/2021/04/academia-tokio-school.jpg';
    fila.appendChild(id);
    fila.appendChild(titulo);
    fila.appendChild(url);
    body.appendChild(fila);
};