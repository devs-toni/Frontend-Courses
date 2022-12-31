import { HttpConnection } from "./HttpConnection.js";

let url = 'https://pokeapi.co/api/v2';
let idToRemovePost;

const loadApi = async () => {
    console.log("Cargando API");
    let md5 = 'f14bd67e51e6a982a3799ad85ed0d6a6';
    let publicKey = '068a9b25d9e49d374c0101bee790e361';
 

    for (let i = 1; i <= 32; i++) {
        await HttpConnection().get(`${url}/pokemon/${i}`).then(result => {
            console.log(result);
            const cardsContainer = document.querySelector('#cards');
            cardsContainer.append(addElement(
                'div',
                ['card','me-1','ms-1','mb-2','bg-dark', 'border-0'],
                [
                    { name: 'data-send', value: `id-${result.id}` },
                    { name: 'id', value: `card-${result.id}` },
                    { name: 'style', value: 'width: 18.8rem; cursor:pointer' },
                    { name: 'data-bs-toggle', value: 'modal' },
                    { name: 'data-bs-target', value: '#modal' },
                ],
                '',
                { 
                    e: 'click',
                    func: openModal 
                }
            ));
            const card = document.querySelector(`#card-${result.id}`);
            card.append(addElement(
                'img',
                ['card-img-top'],
                [
                    { name: 'src', value: result.sprites.other.home.front_default },
                    { name: 'alt', value: result.name },
                    { name: 'data-send', value: `id-${result.id}` },
                ]
            ));
            card.append(
                addElement( // element / classes / attributes / text /events 
                    'span', 
                    ['btn-close','text-light'],
                    [
                        { name: 'data-bs-toggle', value: 'modal' },
                        { name: 'data-bs-target', value: '#deletePostModal' },
                        { name: 'id', value: `trash${result.id}` },
                        { name: 'style', value: 'cursor:pointer' }
                    ],
                    '',
                    { 
                        e: 'click', 
                        func: waitingIdToRemovePost 
                    }
            ));
            const trash = document.getElementById(`trash${result.id}`);
            trash.append(
                addElement( // element / classes / attributes / text /events 
                    'i', 
                    ['bi', 'bi-trash3','w-25'],
                    [
                        {name: 'style', value: 'cursor:pointer'},
                        {name: 'id', value: `trash${result.id}`}
                    ]
            ));
            card.append(addElement(
                'div',
                ['card-body'],
                [{ name: 'id', value: `card-body-${result.id}` }]
            ));
            const cardBody = document.querySelector(`#card-body-${result.id}`);
            cardBody.append(addElement(
                'p',
                ['card-text','text-light','text-center','mt-2','fs-2'],
                [],
                result.name.toUpperCase()
            ));
        });
    }
}

export const addElement = (element, classes, parameters, text, event) => {
    const el = document.createElement(element);
    classes &&
        classes.forEach(name => {
            el.classList.add(name);
        });
    parameters &&
        parameters.forEach(param => {
            el.setAttribute(param.name, param.value);
        });
    if (text) el.textContent = text;
    event &&
        el.addEventListener(event.e, event.func);
    return el;
}

export const openModal = async (e) => {
    let id = e.target.getAttribute('data-send').replace('id-', '');
    console.log(e.target);
    console.log(id);
    HttpConnection().get(`${url}/pokemon/${id}`).then(res => {
        console.log(res);
        document.getElementById('modalBody').textContent = res.body;
        const title = document.getElementById('showModalLabel')
        title.textContent = res.name;
        title.classList.add('text-dark');
        title.classList.add('text-capitalize')
    });
}

const waitingIdToRemovePost = (e) => {
    idToRemovePost = e.target.id.replace('trash', '');
}
const removePost = async (e) => {
    await http().del(localPostsEndpoint + '/' + idToRemovePost);
    loadPosts();
}
document.getElementById('finalRemovePost').addEventListener('click', removePost);

loadApi();
