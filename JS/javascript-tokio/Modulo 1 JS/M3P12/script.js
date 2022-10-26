function enlaces() {
    var enlace = document.getElementById('enlace');
    var num = document.querySelectorAll('a').length;
    enlace.innerText = "La página tiene un total de " + num + " enlaces";
}

function penultimo() {
    var direccion = document.getElementById('penultimo');
    var num = document.querySelectorAll('a');
    var dir = num[num.length - 2];
    var href = dir.getAttribute("href");
    direccion.innerText = "La dirección del penúltimo enlace es - " + href;
}

function twitter() {
    var hrefs = [];

    var cantidad = document.getElementById('twitter');
    var num = document.querySelectorAll('a');
    for (let i = 0; i < num.length; i++) {
        var dir = num[i];
        var href = dir.getAttribute("href");
        if (href === 'https://twitter.com') {
            hrefs.push(href)
        }
    }
    cantidad.innerText = "La cantidad de enlaces que dirigen a Twitter es " + hrefs.length;
}

function parrafo() {
    var hrefs = [];

    var cantidad = document.getElementById('parrafop');
    var padre = document.getElementById('parrafo3');
    var etiquetas = padre.getElementsByTagName('a');

    cantidad.innerText = "La cantidad de enlaces en el tercer párrafo es " + etiquetas.length;
}