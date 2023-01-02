let seceretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click',function(){
const guess = Number(document.querySelector('.guess').value);

// When there is no input
if(!guess) {
    displayMessage('⛔ No Number!');
}

// When player wins
else if (guess === seceretNumber) {
    displayMessage('🎉 correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = seceretNumber;
    //document.querySelector('.highscore').textContent = score;
    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}

else if(guess !== seceretNumber) {
    if(score > 1) {
        displayMessage(guess>seceretNumber?'👆 Too high!': '👇 Too low!');
        score--;
        displayScore(score);
    }
    else {
        displayMessage('🧨 You lost the game');
        displayScore(0);
    }
}

});

document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    seceretNumber = Math.trunc(Math.random()*20) + 1;

    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});