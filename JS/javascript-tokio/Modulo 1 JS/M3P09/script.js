function generar_tabla(){

if (state){
    crearTabla(3);
} else {
    var filas = document.querySelectorAll('#fila');
    console.log(filas);
    for (let index = 0; index < filas.length; index++) {
        filas[index].remove();
        
    }
    state = true;
}


}
var state = true;
function crearTabla(cantity) {
    state = false;
    for (let index = 0; index < cantity; index++) {
        var fila = document.createElement('tr');
        fila.setAttribute("id", 'fila');
        var columna1 = document.createElement('td');
        var columna2 = document.createElement('td'); 
        var columna3 = document.createElement('td');
        columna1.innerHTML = 'Columna 1 / Fila ' + index;
        columna2.innerHTML = 'Columna 2 / Fila ' + index;
        columna3.innerHTML = 'Columna 3 / Fila ' + index;

        fila.appendChild(columna1);
        fila.appendChild(columna2);
        fila.appendChild(columna3);
        var table = document.getElementById('table');
        document.getElementById('table').appendChild(fila);
    }
}
