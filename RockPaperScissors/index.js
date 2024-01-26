// Rock Paper Scissors Game

playerDisplay=document.getElementById("playerDisplay");
computerDisplay=document.getElementById("computerDisplay");
resultDisplay=document.getElementById("resultDisplay");
choices=["rock","paper","scissors"];

function playGame(playerChoice){
    computerChoice=choices[Math.floor(Math.random()*3)]
    console.log(computerChoice);
    let result="";

    if(playerChoice === computerChoice){
        result="IT'S A TIE!";

    }
    else{
        switch (playerChoice) {
            case "rock":
                result=(computerChoice === "scissors") ? "YOU WON!": "YOU LOST!";break;
            case "paper":
                result=(computerChoice==="rock")? "YOU WON!" :"YOU LOST!";break;
            case "scissors":
                result=(computerChoice==="paper")?"YOU WON!":"YOU LOST!";break;
        }
    }
    if(result=="YOU WON!")
    {
        resultDisplay.style.color="green";
    }
    else if(result =="YOU LOST!"){
        resultDisplay.style.color="red";
    }
    else{
        resultDisplay.style.color="BLACK";
    }
    playerDisplay.textContent="PLAYER: "+playerChoice;
        computerDisplay.textContent="COMPUTER: "+computerChoice;
        resultDisplay.textContent=result;
    
}