import SaludarD, { hello as hola, Saludar, saludar, MI_VARIABLE, PI, user } from './valoresConstantes.js';
import { aritmetica as math } from './aritmetica.js';
console.log("Archivo Módulos");

console.log(PI * MI_VARIABLE + " " + user);

console.log(math.sumar(3,4));
console.log(math.restar(4, 3));
saludar();
hola();

new Saludar();
new SaludarD();