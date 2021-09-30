let user = 0;
let comp = 0;
// dom element
const user1 = document.getElementById("uscore");
const comp1 = document.getElementById("cscore");

const parent = document.querySelector(".parent");
const display = document.querySelector(".disp>p");

const rock1 = document.getElementById("rock");
const paper1 = document.getElementById("paper");
const scissor1 = document.getElementById("scissor");
function computerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNo = Math.floor(Math.random() * 3);
    return choices[randomNo];
}
function convert(letter){
    if(letter=="r")
    return "Rock";
    if(letter=="p")
    return "Paper";
    if(letter=="s")
    return "Scissor";
}
function win(userChoice,cChoice){
    user++;
    user1.innerHTML=user;
    comp1.innerHTML=comp;
    // display.innerHTML=convert(userChoice) + " beats " + convert(cChoice) + ", you win!" ;
    const userdis="(user)".fontsize(4).fontcolor("red").sub();
    const compdis="(comp)".fontsize(4).fontcolor("red").sub();
    display.innerHTML=`${convert(userChoice)}${userdis} beats ${convert(cChoice)}${compdis}, you win!✨`;    
}

function lose(userChoice,cChoice){
    comp++;
    user1.innerHTML=user;
    comp1.innerHTML=comp;
    // display.innerHTML=convert(userChoice) + " beats " + convert(cChoice) + ", you win!" ;
    const userdis="(user)".fontsize(4).fontcolor("red").sub();
    const compdis="(comp)".fontsize(4).fontcolor("red").sub();
    display.innerHTML=`${convert(userChoice)}${userdis} loses ${convert(cChoice)}${compdis}, You Lost🥴`;
}
function tie(userChoice,cChoice){
    
    const userdis="(user)".fontsize(4).fontcolor("red").sub();
    const compdis="(comp)".fontsize(4).fontcolor("red").sub();
    display.innerHTML=`${convert(userChoice)}${userdis} equals ${convert(cChoice)}${compdis}, Tie🙃`; 
}

function game(userChoice) {
    const cChoice = computerChoice();
    switch (userChoice + cChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,cChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice,cChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            tie(userChoice,cChoice);
            break;
    }
}
function main() {
    rock1.addEventListener('click', function () {
        game("r");
    })
    paper1.addEventListener('click', function () {
        game("p");
    })
    scissor1.addEventListener('click', function () {
        game("s");
    })
}

main();