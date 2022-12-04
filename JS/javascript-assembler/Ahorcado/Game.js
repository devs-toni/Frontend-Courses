class Game {
    constructor(user, word) {
        this.user = user;
        this.word = '';
        this.fails = 0;
        this.hits = 0;
        this.winner = false;
        this.opportunities = 6;
    }

    chooseWord = (i) => {
        let word = wordList[Math.floor(Math.random() * i)];
        this.word = word;
        makeWord(word);
    }

    chooseLetter = (e) => {
        const letter = e.target.textContent;
        e.target.setAttribute('disabled', true);
        e.target.style.opacity = '0.4';
        e.target.style.cursor = 'auto';
        for (const char of this.word) {
            if (char === letter.toLowerCase()) {
                const letterContainer = document.querySelectorAll(`#${char}`);
                letterContainer.forEach(div => {
                    div.textContent = letter;
                    this.hits++;
                });
                e.target.style.backgroundColor = 'green';
                console.log(this.hits + " + " + this.word.length);
                if (this.hits === this.word.length) {
                    clearInterval(timer);
                    this.winner = true;
                    finishGame();
                }
                return;
            }
        }
        this.fails++;
        if (this.fails === this.opportunities) {
            clearInterval(timer);
            finishGame();
        }

        console.log(this.fails + '<' + this.word.length + '  ---- ' + letter);
    }
}