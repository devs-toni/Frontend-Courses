let texto = "Hola que tal como estamos"

const hablar = (texto) => {
speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
console.log("Hola");
}

console.log(document.head);
console.log(document.body);
console.log(document.characterSet);
console.log(document.title);
console.log(document.documentElement);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola Mundo!</h2>");

