function notas(){
    var nota = prompt("Introduce una nota entre 0 y 10");

    if (nota >= 0 && nota < 3){
        document.getElementById('p').innerText = 'La nota introducida es un MUY DEFICIENTE';
    } else if (nota >= 3 && nota < 5){
        document.getElementById('p').innerText = 'La nota introducida es un INSUFICIENTE';
    } else if (nota >= 5 && nota < 6){
        document.getElementById('p').innerText = 'La nota introducida es un SUFICIENTE';
    } else if (nota >= 6 && nota < 7){
        document.getElementById('p').innerText = 'La nota introducida es un BIEN';
    } else if (nota >= 7 && nota < 9){
        document.getElementById('p').innerText = 'La nota introducida es un NOTABLE';
    } else if (nota >=9 && nota <= 10){
        document.getElementById('p').innerText = 'La nota introducida es un SOBRESALIENTE';
    } 

    if (nota < 0 || nota > 10 ){
        notas();
    }
}