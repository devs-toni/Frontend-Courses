function letras(){
    var entrada = '';
    while (entrada != null){
        var text = document.getElementById('p').innerText;
        entrada = prompt("Introduce un caracter . . .");
        
        if (!is_letter(entrada)){
            alert("Solo se pueden introducir caracteres");

        }
        if (is_letter(entrada) && entrada != null){
        document.getElementById('p').innerText = text + entrada;
        }
    }

}

function is_letter (str){
    var regex = /^[a-zA-Z]+$/;
    if(regex.test(str)){
        return true;
    }else{
        return false;
    }
  } 