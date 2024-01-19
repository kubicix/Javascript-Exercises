
    const value = document.getElementById("textbox")
    const toCelc = document.getElementById("toCelcius")
    const toFahr = document.getElementById("toFahrenheit")
    const result=document.getElementById("result");
function convert(){
    if(toCelc.checked){
        let temp=value.value
        temp= (temp - 32) * (5/9);
        result.textContent=temp.toFixed(1)+"°C"
    }
    else if(toFahr.checked){
        let temp=value.value
        temp=(temp * 9/5 )+32;
        result.textContent=temp.toFixed(1)+"°F"
    }
    else{
        result.textContent="Select a unit";
    }
}