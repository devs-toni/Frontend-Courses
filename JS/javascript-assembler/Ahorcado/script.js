let user, game, hits;
let wordList = ['mundo', 'espectaculo', 'persiana', 'calavera'];
let timePassed = 0;
let users;
let timer;

function startGame(e) {
    timer = setInterval(() => {
        timePassed++;
        console.log('timePassed: ' + timePassed);
    }, 1000);
    users = JSON.parse(localStorage.getItem('users'));
    if (!users) users = [];
    hits = 0;
    e.preventDefault();
    user = new User(username.value, 'Currently playing');
    game = new Game(user);
    game.chooseWord(wordList.length);
    showGame(user);
}

function finishGame(e) {
    
    if (game.winner) {
        user.score = timePassed;
        user.score = `Win! ${timePassed} seconds`;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        finish(0);
    }
    else {
        user.score = timePassed;
        user.score = `Lost! ${timePassed} seconds`;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        finish(1);
    }
}
