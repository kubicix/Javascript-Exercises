// Stopwatch

const display = document.getElementById("display");
let timer;
let startTime=0;
let elapsedTime=0;
let isRunning=false;


function start(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }
    
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime= Date.now() - startTime;
        isRunning=false;    
    }
}

function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    display.textContent="00:00:00:00"
}

function update(){
    const currentTime=Date.now()
    elapsedTime=currentTime-startTime;
    
    let hours=Math.floor(elapsedTime / (1000 * 60 * 60));
    hours = hours<10 ? "0"+hours:hours;
    let minutes=Math.floor(elapsedTime / (1000 * 60) % 60);
    minutes = minutes <10? "0" + minutes : minutes;
    let seconds=Math.floor(elapsedTime / (1000)% 60);
    seconds=seconds<10?"0"+seconds:seconds;
    let miliseconds=Math.floor(elapsedTime % 1000 / 10);
    miliseconds=miliseconds <10 ? "0"+miliseconds:miliseconds;
    
    display.textContent=hours+":"+minutes+":"+seconds+":"+miliseconds;
    


}

