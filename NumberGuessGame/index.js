let number = Math.floor(Math.random()*100+1)
let guess;
let attempt=0;

console.log(number)

while(true){
    guess = window.prompt("Enter your guess" +number);
    guess=Number(guess);
    attempt++;
    if(guess>number){
        alert("Too high! Try again.");
    }
    else if(number==guess){
        break;
    }
    else{
        alert("Too low Try again.");
    }
}

alert(`Lucky Number was ${number}!.You found the lucky number in ${attempt} guesses.`);