 function playGame() {
    const choice = prompt("Choose heads or tails: ").toLowerCase();
        // Generate a random number (0 or 1) for the coin flip
        const coinFlip = Math.round(Math.random()); // 0 for Heads, 1 for Tails
alert(`coinFlip is:  `+ coinFlip);
        let flipResult;
        if (coinFlip === 0) {
            flipResult = 'heads';
        } else {
            flipResult = 'tails';
        }
        if (choice === flipResult) {
        playGameCoin = `The flip was ${flipResult} and you chose ${choice}... You win!`;
            alert(playGameCoin);
       } 
       else {
        playGameCoin = `The flip was ${flipResult} but you chose ${choice}... You lose!`;
       alert(playGameCoin);
        }
        document.write(playGameCoin);
    }
    playGame();