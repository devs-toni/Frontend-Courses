//let texto = "Hola que tal como estamos"
//const hablar = (texto) => {
//    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
//    console.log("Hola");
//}
//
//console.log(document.head);
//console.log(document.body);
//console.log(document.characterSet);
//console.log(document.title);
//console.log(document.documentElement);
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);
//console.log(document.scripts);
//setTimeout(() => {
//    console.log(document.getSelection().toString());
//}, 3000);
//document.write("<h2>Hola Mundo!</h2>");

console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('cards'));
console.log(document.getElementsByName('nombre'));
console.log(document.getElementById('menu'));
console.log(document.getElementById("h1"));
console.log(document.getElementById("que-es"));
console.log(document.querySelector('.cards'));
console.log(document.querySelectorAll('.cards').forEach((e) => console.log(e.children)));
console.log(document.querySelectorAll('#menu li'))
