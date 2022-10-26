function is_letter(str) {
    var regex = /^[a-zA-Z]+$/;
    if (regex.test(str)) {
        return true;
    } else {
        return false;
    }
}

function factorial() {
    var valores = [];
    var factorial = 1;
    while (true) {
        var num = prompt("Introduce un número entre 0 y 10");
        if (is_letter(num) || num < 0 || num > 10) {
            alert('Debes introducir un número entre 0 y 10');
        } else {
            break;
        }
    }

    for (let index = 1; index <= num; index++) {
        valores.push(index);
    }

    for (let index = 0; index < valores.length; index++) {
        factorial *= valores[index];        
    }
    alert(factorial);

}