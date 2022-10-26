class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

var personas = [];


function crear() {
    var contador = 1;
    while (personas.length < 5) {
        var nombre = prompt("Persona nº " + contador + " - Ingrese el nombre");
        var apellido = prompt("Persona nº " + contador + " - Ingrese el apellido");
        var edad = prompt("Persona nº " + contador + " - Ingrese la edad");

        var persona = new Persona(nombre, apellido, edad);
        personas.push(persona);
        contador++;
    }
}

function mostrar() {
    console.log(personas);
    var filas = document.querySelectorAll('#fila');
    filas.forEach(fila => fila.remove());

    var tabla = document.getElementsByClassName('table');

    for (let index = 0; index < personas.length; index++) {
        var fila = document.createElement('tr');
        fila.setAttribute('id', 'fila');
        fila.setAttribute('class', 'row');
        var columna1 = document.createElement('td');
        columna1.setAttribute('class', 'column');
        var columna2 = document.createElement('td');
        columna2.setAttribute('class', 'column');
        var columna3 = document.createElement('td');
        columna3.setAttribute('class', 'column');
        columna1.innerText = personas[index].nombre;
        columna2.innerText = personas[index].apellidos;
        columna3.innerText = personas[index].edad;
        fila.appendChild(columna1);
        fila.appendChild(columna2);
        fila.appendChild(columna3);
        tabla[0].appendChild(fila);
    }
}
