var listaPrimeros = ['ENSALADA VALENCIANA', 'CALAMARES', 'BRAVAS', 'ALITAS DE POLLO', 'VERDURA A LA PLANCHA'];
var listaPrincipales = ['ENTRECOT', 'PAELLA DE MARISCO', 'FIDEUA', 'SALMON', 'ESPAGUETTIS'];


function cargarMenu() {
    var primero = document.getElementById('first');
    var principal = document.getElementById('second');

    for (var i = 0; i <= 4; i++) {
        var temp = document.createElement('option');
        temp.value = i;
        temp.innerHTML = listaPrimeros[i];
        primero.appendChild(temp);

        var temp2 = document.createElement('option');
        temp2.value = i;
        temp2.innerHTML = listaPrincipales[i];
        principal.appendChild(temp2);
    }
}

function menu() {
    var primero = document.getElementById('first');
    var principal = document.getElementById('second');
    var listaPrimeros = ['ENSALADA VALENCIANA', 'CALAMARES', 'BRAVAS', 'ALITAS DE POLLO', 'VERDURA A LA PLANCHA'];
    var listaPrincipales = ['ENTRECOT', 'PAELLA DE MARISCO', 'FIDEUA', 'SALMON', 'ESPAGUETTIS'];

    var elecPrimero = primero.value;
    var elecPrincipal = principal.value;

    document.getElementById('primero').innerText = 'Primero: ' + listaPrimeros[elecPrimero];
    document.getElementById('segundo').innerText = 'Segundo: ' + listaPrincipales[elecPrincipal];






}