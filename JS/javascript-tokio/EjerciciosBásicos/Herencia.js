var Vehiculo = function (){};

Vehiculo.prototype.acelerar = function (){
    document.write("Vehiculo acelerando!");
}
Vehiculo.prototype.frenar = function (){
    document.write("Vehiculo frenando!");
}
var Coche = function(){}

for (extend in Vehiculo.prototype) {
    Coche.prototype[extend] = Vehiculo.prototype[extend];
}


