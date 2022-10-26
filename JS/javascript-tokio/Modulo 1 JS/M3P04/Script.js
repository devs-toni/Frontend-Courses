function notasII() {

    var notas = [];
    var media = 0;
    var texto = '';

    for (let index = 1; index <= 6; index++) {
        var nota = prompt("Introduce la nota " + index);
        if (nota <= 10 && nota >= 0) {
            notas.push(nota);
             media = parseFloat(nota) + parseFloat(media);
        } else {
            alert("Introduce una nota entre 0 y 10");
            index--;
        }
    }

    console.log(media);
    console.log(notas.length);
    media = media / notas.length;
    texto = utilNota(media);
    document.getElementById('p').innerText = "Nota media = " + media;
    document.getElementById('b').innerText = "Has sacado un " + texto;
}

function utilNota(nota){
    if (nota >= 0 && nota < 3){
        return 'MUY DEFICIENTE';
    } else if (nota >= 3 && nota < 5){
        return 'INSUFICIENTE';
    } else if (nota >= 5 && nota < 6){
        return 'SUFICIENTE';
    } else if (nota >= 6 && nota < 7){
        return 'BIEN';
    } else if (nota >= 7 && nota < 9){
        return 'NOTABLE';
    } else if (nota >=9 && nota <= 10){
        return 'SOBRESALIENTE';
    } 
}