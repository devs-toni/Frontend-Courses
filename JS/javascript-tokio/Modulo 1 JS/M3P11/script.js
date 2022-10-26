function fecha() {
    var fecha = new Date();

    var numDia = fecha.getDate();

    var dia = fecha.getDay();
    var diaString = getDia(dia);
    
    var mes = fecha.getMonth();
    var mesString = getMes(mes);
    
    var ano = fecha.getFullYear();
    
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    document.getElementById('p').innerText = "Hoy es " + diaString + ", " + numDia + " de " + mesString + " de " + ano + ", y son las " + hora + ":" + minutos + " horas.";
}

function getDia(num) {
    switch (num) {
        case 0: return "Domingo";
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miercoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sabado";
    }
}

function getMes(num) {
    switch (num) {
        case 0: return "Enero";
        case 1: return "Febrero";
        case 2: return "Marzo";
        case 3: return "Abril";
        case 4: return "Mayo";
        case 5: return "Junio";
        case 6: return "Julio";
        case 7: return "Agosto";
        case 8: return "Septiembre";
        case 9: return "Octubre";
        case 10: return "Noviembre";
        case 11: return "Diciembre";

    }
}