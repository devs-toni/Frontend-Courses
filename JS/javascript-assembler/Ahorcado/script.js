let user, game, hits;
let users = [];
let wordList = ['mundo','espectaculo','persiana','calavera'];


function startGame(e) {
    users = JSON.parse(localStorage.getItem('users'));
    if (!users) users = [];
    hits = 0;
    e.preventDefault();
    user = new User(username.value, 'Currently playing');
    game = new Game(user);
    game.chooseWord(wordList.length);
    showGame(user);
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}
