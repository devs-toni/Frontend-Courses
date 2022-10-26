
var Coche = function(modelo) {

    this.modelo = modelo;
    var ruedas = 4;
    this.tieneMotor = true;
    this.avanzar = function(){
        document.write("Avanza");
    }
}

var avion = function(){};

avion.prototype.volar = function (horas) {
    document.write("Estoy volando " + horas + " horas");
}

avion.prototype.aterrizar = function (rapidez) {
    document.write("Freno a una velocidad de " + rapidez);
}


