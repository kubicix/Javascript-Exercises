// Digital Clock Function

function updateClock(){
    var now = new Date();
    var h= now.getHours();
    var type = h>=12 ? "PM":"AM";
    h = h>12 ? (h-12):h;
    h = h<10 ? "0"+h:h; 
    h= h % 24 ==0 ? "00":h;
    var m=now.getMinutes();
    m = m<9 ? "0"+m:m;
    var s =now.getSeconds();
    s= s<9? "0"+s:s;
    var clockHtml=document.getElementById("clock")
    clockHtml.textContent=h+":"+m+":"+s+" "+type;
}
updateClock();
setInterval(updateClock,1000)



