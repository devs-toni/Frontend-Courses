export const PI = Math.PI;
export const MI_VARIABLE = 2.0;
export let user = 'John';
let pass = 'john';


export function saludar () {
    console.log("Hola John");
}

export const hello = () => {
    console.log("Hello Johnnnnnnn, no sabes nada John");
}

export class Saludar {
    constructor(){
        console.log("Estoy saludando con clase");
    }
}

export default class SaludarD {
    constructor(){
        console.log("Estoy saludando con clase y en default");
    }
}

//export default hello;