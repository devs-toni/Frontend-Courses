var monedas = 50;


function apuestas() {
  
    while (monedas > 0) {
        var random = Math.floor(Math.random() * (6 - 1) + 1);
        var apuesta = prompt("Cuantas monedas deseas apostar? Tienes un total de " + monedas);
        console.log(random);
        if (is_letter(apuesta) || apuesta <= 0 || apuesta > monedas) {
            alert("Debes introducir un numero entre 1 y " + monedas);
        } else {
           var eleccion = prompt ("Que número entre 1 y 6 ha salido?");
           if (is_letter(eleccion) || eleccion <= 0 || eleccion > 6){
                alert("Debes introducir un número entre 1 y 6");
           } else {
                if (eleccion == random){
                    monedas = monedas + (2*apuesta);
                    alert("Has ganaddo " + (2*apuesta) + (" monedas"));
                } else {
                    monedas = monedas - apuesta;
                    alert("Has perdido " + apuesta + " monedas. Te quedas un total de " + monedas);
                }
           }
        }   


    }
}


function is_letter(str) {
    var regex = /^[a-zA-Z]+$/;
    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
} 