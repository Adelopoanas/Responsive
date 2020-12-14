window.addEventListener('load',init);

//Globals
let time = 5;
let score = 0;
let isPlaying;

//DOM ELEMENTS
const input = document.querySelector('#input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#five');

//ARRAYS
const words = ['Anas','Abdullah','Ahmad','Aishat','Zainab','Khadijah','Asmau','Asia','Yusuf','Ibrahim','muhammad','Sulaiman','Isaac','Abdulfattah','Abubakr'];
const words1 = ['Anas','Abdullah','Ahmad','Aishat','Zainab','Khadijah','Asmau','Asia','Yusuf','Ibrahim','mustapha','Sulaiman','Isaac','Abdulfattah','Abubakr'];
const words2 = ['Anas','Abdullah','Ahmad','Aishat','Zainab','Khadijah','Asmau','Asia','Yusuf','Ibrahim','Sulaiman','Isaac','Abdulfattah','Abubakr'];

//INITIALIZE THE GAME
function init(){
    showWord(words);
    //START MATCH
    input.addEventListener('input',startMatch);
    //CALL COUNTDOWN
    setInterval(countdown,1000);
    //CHECK THE STATUS
    setInterval(checkStatus,50);

}
//START MATCH
function startMatch() {
    if (matchWords()){
   isPlaying = true;
    time = 6;
    showWord(words);
    input.value = '';
    score++;
    }
    if (score === -1){
        scoreDisplay.innerHTML = 0;
    }else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if (input.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

//PICK RANDOM WORDS
function showWord(words) {
    //GENERATE
    const randIndex = Math.floor(Math.random() * words.length);
    //OUTPUT
    currentWord.innerHTML = words[randIndex];
}

// COUNTDOWN TIMER
function countdown() {
    if (time > 0){
        time--;
    }else if(time === 0) {
        //GAME OVER
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

function checkStatus() {
     if (!isPlaying && time === 0) {
            message.innerHTML = 'Game Over!!!';
            score = -1;
        }
    }
