// DICE ROLLER JS


function rollDice(){
    const diceCount=document.getElementById("diceCount").value;
    const diceVals=document.getElementById("diceResult")
     diceImages=document.getElementById("diceImages")
    let diceValues=[];
    if(diceCount>=11){
        alert("We only have 10 dices :(");
    }
    else if(diceCount>=1){
        for(let i =1;i<=diceCount;i++){
            let currentVal=Math.floor((Math.random()*6)+1)
            diceValues.push(currentVal)
        }
    }
    else{
        alert("You have to enter a valid number!")
    }
    diceVals.innerHTML="Dice Value(s): "+diceValues
    // Dice images
    let diceImagesHTML = "";
    for(let i = 0; i < diceValues.length; i++){
        diceImagesHTML += '<img src="dice_images/' + diceValues[i] + '.png" alt="Dice ' + diceValues[i] + '">';
    }
    diceImages.innerHTML = diceImagesHTML;
    console.log(diceValues)
}