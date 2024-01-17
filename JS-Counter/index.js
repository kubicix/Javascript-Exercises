function decrement(){
     	var x = document.getElementById("number").innerHTML;
        document.getElementById("number").innerHTML = Number(x)-1;
}

function reset(){
   document.getElementById("number").innerHTML = 0;
}

function increment(){
    var x = document.getElementById("number").innerHTML;
   document.getElementById("number").innerHTML = Number(x)+1;
}
