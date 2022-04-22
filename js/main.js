const button = document.querySelector("button");
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score");
let score = 0;
let timeIsUp = false;
let lastHole;


function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}



function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes [index];
    console.log(hole);

    if (hole === lastHole) {

        return randomHole(holes);
        
    }

    lastHole = hole;
    return hole;

}



function appear() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);

    hole.classList.add("up");

    setTimeout(() => {

        hole.classList.remove("up");

        if (!timeIsUp) {
            appear();
        }
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeIsUp = false;
    score = 0;
    const timeout = 10000;

    appear();
    
    setTimeout(() => timeIsUp = true, timeout);
}

function whack() {
    score++;


    this.classList.remove("up");
    scoreBoard.textContent = score;
}


button.addEventListener("click", startGame);
moles.forEach((mole) => mole.addEventListener("click", whack));