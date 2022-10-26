function volumen(){
    var radio = prompt("Introduce el radio de la esfera a calcular . . .");

    var formula = "((4/3) * Math.PI * Math.pow(radio, 3))";
    var vol = ((4/3) * Math.PI * Math.pow(radio, 3));

    document.getElementById("volumen").innerText = "El volumen de la esfera es igual a " + formula + ", por tanto una esfera de " + radio + " tiene un volumen de " + vol;

}