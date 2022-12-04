let result = document.getElementById('result');
let operacion = document.getElementById('operation');
let history = '';
let finished = false;

function clearScreen() {
    result.innerText = "";
    operacion.innerText = "";
    finished = false;
}

function add(value, event) {
    let operation;
    if (event) operation = event.target.innerText;
  
    if (operation === '*' || operation === '+' || operation === '/' || operation === '-' || operation === '%') {
        finished = false;
    }

    if (!finished){
        return result.innerText += value;
    } else {
        return result.innerText = value;
    }
}

function calculate() {
    const res = result.innerText;
    const cal = eval(res);
    operacion.innerText = result.innerText;
    history += `${result.innerText} = ${cal}\n` ;
    result.innerText = cal;
    finished = true;
    console.log(history);
}


