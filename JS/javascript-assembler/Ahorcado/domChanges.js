const start = document.getElementById('start');
const gameScreen = document.getElementById('game');
const statusScreen = document.getElementById('status');
const word = document.getElementById('word');
const options = document.querySelectorAll("[type='option']");
const scoresPanel = document.getElementById('scores');
const finalPanel = document.getElementById('status');

const showGame = (user) => {
    start.classList.remove('active');

    let previousMatches = JSON.parse(localStorage.getItem('users'));
    if (previousMatches) {
        previousMatches.forEach(match => {
            let scoreUser = document.createElement('div');
            let name = document.createElement('p');
            let score = document.createElement('p');
            scoreUser.classList.add('match');
            name.classList.add('name');
            score.classList.add('score');
            name.textContent = match.name;
            score.textContent = match.score;
            scoreUser.append(name);
            scoreUser.append(score);
            scoresPanel.append(scoreUser);
        });
    }

    options.forEach(option => option.addEventListener('click', game.chooseLetter));
    let scoreUser = document.createElement('div');
    let name = document.createElement('p');
    let score = document.createElement('p');
    scoreUser.classList.add('match');
    name.classList.add('name');
    score.classList.add('score');
    score.setAttribute('id', 'score');
    name.textContent = user.name;
    score.textContent = 'Currently playing...';
    scoreUser.append(name);
    scoreUser.append(score);
    scoresPanel.append(scoreUser);

    gameScreen.classList.add('active');
}

const finish = (state) => {
    let title = document.createElement('h1');
    let time = document.createElement('p');
    title.classList.add('title');
    time.classList.add('time');
    if (state === 0) {
        title.textContent = 'You won 🥳';
        time.textContent = `You won in ${user.score} seconds`;
        document.getElementById('score').textContent = `Win! ${timePassed} seconds`;
    } else {
        title.textContent = 'You lose 😒';
        time.textContent = `You lost in ${user.score} seconds`;
        document.getElementById('score').textContent = `Lose! ${timePassed} seconds`;
    }
    finalPanel.insertBefore(time, finalPanel.firstChild);
    finalPanel.insertBefore(title, finalPanel.firstChild);
    gameScreen.classList.remove('active');
    statusScreen.classList.add('active');
}

const makeWord = (finalWord) => {
    for (let i = 0; i < finalWord.length; i++) {
        let letterContainer = document.createElement('div');
        let letter = document.createElement('p');
        letterContainer.classList.add('letter-container');
        letter.classList.add('letter');
        letter.setAttribute('id', finalWord.charAt(i));
        letterContainer.append(letter);
        word.append(letterContainer);
    }
}
