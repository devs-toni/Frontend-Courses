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
//console.log(document.getElementsByTagName('li'))
//console.log(document.getElementsByClassName('cards'));
//console.log(document.getElementsByName('nombre'));
//console.log(document.getElementById('menu'));
//console.log(document.getElementById("h1"));
//console.log(document.getElementById("que-es"));
//console.log(document.querySelector('.cards'));
//console.log(document.querySelectorAll('.cards').forEach((e) => console.log(e.children)));
//console.log(document.querySelectorAll('#menu li'))

//console.log(document.documentElement.lang);
//console.log(document.querySelector('.link-dom').getAttribute('data-descripcion'));
//console.log(document.querySelector('.link-dom').href);
//document.documentElement.setAttribute('lang','es-ES');
//console.log(document.documentElement.lang);
//
const $linkDom = document.querySelector('.link-dom');
//
//$linkDom.setAttribute('target','_blank');
//$linkDom.setAttribute('rel','noopener');
//$linkDom.setAttribute('href','https://www.google.es');
//
//console.log($linkDom.hasAttribute('rel'));
//$linkDom.removeAttribute('rel');
//console.log($linkDom.hasAttribute('rel'));
//console.log($linkDom.dataset);
//$linkDom.dataset.nombre = "Ying";
//console.log($linkDom.dataset);
//console.log($linkDom.style);
//console.log($linkDom.getAttribute('style'));
//console.log($linkDom.style.color);
//console.log(getComputedStyle($linkDom).getPropertyValue("color"));
$linkDom.style.setProperty('text-decoration','none');
$linkDom.style.width = '50%';
$linkDom.style.marginLeft = '20%'
$linkDom.style.removeProperty('background-color');

// Variables CSS - Custom Properties

const $html = document.documentElement, $body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
let varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');
//console.log(varDarkColor, varYellowColor);
//$body.style.color = varYellowColor;
//$body.style.backgroundColor = varDarkColor;
//$html.style.setProperty('--dark-color', 'pink');
//varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
//$body.style.setProperty("background-color", varDarkColor);

const $card = document.querySelector('.card');
//console.log($card);
//console.log($card.className);
$card.classList.add('opacity-80', 'sepia');
$card.classList.add('rotate-135');
//console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-135');
$card.classList.toggle('rotate-135');
$card.classList.remove('opacity-80');
$card.classList.replace('rotate-135', 'rotate-45');
$card.style.setProperty('background-color', '#111');
$card.style.setProperty('color', '#fff');
//console.log($card.classList);
const $whatIsDOM = document.getElementById('que-es');
let text = `
<p>
El modelo de Objetos del Documento 
(<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML</p>
`;
$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
//$whatIsDOM.outerHTML = text;
$whatIsDOM.innerHTML = text;
const $cards = document.querySelector('.multicards');
//console.log($cards.children);
//console.log($cards.children[2].closest('section'));
//console.log($cards.childNodes);
//console.log($cards.parentElement);
//console.log($cards.parentNode);
//console.log($cards.firstChild);
//console.log($cards.firstElementChild);
//console.log($cards.lastChild);
//console.log($cards.lastElementChild);
//console.log($cards.nextSibling);
//console.log($cards.nextElementSibling);
//console.log($cards.previousSibling);
//console.log($cards.previousElementSibling);
//console.log($cards.closest('body'));

const $section = document.createElement('section')
,$figure = document.createElement('figure'),
$img = document.createElement('img'),
$figcaption = document.createElement('figcaption'),
$figcaptionText = document.createTextNode('Animals'),
$cardsElement = document.querySelector('.multicards'); 

$figcaption.appendChild($figcaptionText);
$figure.classList.add('card');
$section.classList.add('cards');
$img.setAttribute('src', 'https://placeimg.com/200/200/animals');
$img.setAttribute('alt', 'Animals');
$figure.appendChild($img);
$figure.appendChild($figcaption);
$section.appendChild($figure);
$cardsElement.appendChild($section);

const $section2 = document.createElement('section');
$section2.classList.add('cards');
$section2.innerHTML = `
<figure class="card">
<img src='https://placeimg.com/200/200/people' alt='people' />
<figcaption>People</figcaption>
</figure>
`; 

$cardsElement.appendChild($section2);

const estaciones = ['Invierno','Primavera','Verano','Otoño'];
const $ul = document.createElement('ul');
document.write('<h3>Estaciones del Año</h3>');

estaciones.forEach(e => {
    const $li = document.createElement('li'); 
    $li.textContent = e ;
    $ul.appendChild($li);
});
document.body.appendChild($ul);


const continentes = ['Europa','Africa','America','Asia', 'Oceania'];
const $ul2 = document.createElement('ul');
document.write('<h3>Continentes del Mundo</h3>');
document.body.appendChild($ul2);
continentes.forEach(e => {
    $ul2.innerHTML += `<li>${e}</li>`;
});

const meses = ['Enero','Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre','Noviembre','Diciembre'];
const $ul3 = document.createElement('ul');
const $frag = document.createDocumentFragment();

meses.forEach(e => {
    const $li = document.createElement('li');
    $li.textContent = e;
    $frag.appendChild($li);
})
document.write('<h3>Meses del Año</h3>');
$ul3.appendChild($frag);
document.body.appendChild($ul3);
