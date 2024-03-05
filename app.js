let userScore= 0;
let computerScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const Tose1 = document.querySelector("p1");
const Tose2 =document.querySelector("p2");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score")
// const UserTose= document.querySelector("p2");

const genComputerChoice= ()=>{
    const options = ["rock","paper","scissor"];
    const randnum = Math.floor(Math.random()*3);
     return options[randnum];
}

const drawGame =()=>{
    // console.log("Game is Draw");
    msg.innerText = "Game was Draw.";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice , ComputerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win the Game!");
        msg.innerText="You Win the Game! ";
        msg.style.backgroundColor= "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        // console.log("You lost the Game!");
        msg.innerText="You lost the Game!";
        msg.style.backgroundColor= "red";
    }
}

const playGame = (userChoice)=>{
Tose1.innerText="User  choice :" +userChoice;


const ComputerChoice =genComputerChoice();
Tose2.innerText="Comoputer choice :" +ComputerChoice;

if(userChoice === ComputerChoice){
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin =  ComputerChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        userWin = ComputerChoice === "scissor" ?false :true;
    }
    else{
        userWin =ComputerChoice === "rock" ?false :true;
    }
    showWinner(userWin, userChoice , ComputerChoice);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id")
     playGame(userChoice);
    });
})