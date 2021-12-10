
function generateWinningNumber() {
    return Math.floor((Math.random()*100));
}

const game = {
    playerGuess: 0,

    winningNumber: generateWinningNumber(),

    pastGuesses: [0, 0, 0, 0, 0],

    counter: 1,

    difference: function() {
        let returnMessage = document.getElementById('game_discription');
        let addMessage = "";
        let difference = 0;

        if(this.playerGuess > this.winningNumber) {
            addMessage += "That Guess Was Wrong, Guess Lower!";
            difference = (this.playerGuess - this.winningNumber);
        } else {
            addMessage += "That Guess Was Wrong, Guess Higher!"
            difference = (this.winningNumber - this.playerGuess);
        }

        if(difference <= 10) {
            addMessage += " You're Burning Hot!";
        }else if(difference <= 20) {
            addMessage += " You're Warm."
        }else if(difference <= 30) {
            addMessage += " You're Cold."
        }else {
            addMessage += " You're Freezing Cold!"
        }

        returnMessage.innerHTML = addMessage;

    },

    logPastGuess: function() {
        switch (this.counter) {
            case 1: 
                let message1 = document.getElementById('guess_1');
                message1.innerHTML = String(this.playerGuess);
                break;
            case 2:
                let message2 = document.getElementById('guess_2');
                message2.innerHTML = String(this.playerGuess);
                break;
            case 3:
                let message3 = document.getElementById('guess_3');
                message3.innerHTML = String(this.playerGuess);
                break;
            case 4:
                let message4 = document.getElementById('guess_4');
                message4.innerHTML = String(this.playerGuess);
                break;
            case 5:
                let message5 = document.getElementById('guess_5');
                message5.innerHTML = String(this.playerGuess);
                break; 
            default: 
                break;
        }
        this.pastGuesses.push(this.playerGuess);
    },

    guessCheck: function() {
        if(this.playerGuess == this.winningNumber) {
            let returnMessage = document.getElementById('game_discription');
            returnMessage.innerHTML = "You Won The Game! Great Job! Hit The New Game Button To Play Again!"
        } else if(isNaN(this.playerGuess) || this.playerGuess < 1 || this.playerGuess > 100) {
            alert("That is an invalid guess.");
        } else if(this.pastGuesses.includes(this.playerGuess)) {
            alert("Opps Looks like you Guessed that Number Already")
        } else if((this.playerGuess > 0) && (this.playerGuess < 101) && (this.playerGuess !== this.winningNumber)){
            this.logPastGuess();
            this.difference();
        } else {
            alert("There was an issue!")
        }
    },

    startGame: function() {
        this.playerGuess = document.getElementById('user_guess').value; 
        console.log(this.winningNumber);
        this.guessCheck();
        this.counter += 1;
    },

    getHint: function() {
        let hint = document.getElementById('hint_array_clicked');
        hint.innerHTML = this.hintString();

    },

    hintString: function() {
        let returnString = "";

        for(let i = 1; i <= 100; i++) {
            returnString += (i + " ");
        }

        return returnString;
    },

    newGame: function() {
       this.playerGuess = 0;
       this.winningNumber = generateWinningNumber();
       this.pastGuesses = [0, 0, 0, 0, 0];
       this.counter = 1;

       let gameDescription = document.getElementById('game_discription');
       gameDescription.innerHTML = "Guess a number between one and one hundred. If you guess right within five guesses you Win!";

       for (let i = 1; i <= 5; i++) {
            let message = document.getElementById(('guess_' + String(i)));
            message.innerHTML = ('guess_' + String(i));
        } 

        let guessInput = document.getElementById('user_guess');
        guessInput.value = "0";

        let hint = document.getElementById('hint_array_clicked');
        hint.innerHTML = "Hint: None"
    }
}


