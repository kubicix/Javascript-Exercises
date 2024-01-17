// console.log(`Hello`);
// console.log(`I like döner!`);
function Submit(){
    let username = document.getElementById("text").value;
    document.getElementById("myh1").textContent=`Hello ${username}`;
    username = Number(username)
    username+=3;
    console.log(username,typeof username);
}

// window.alert(`This is an alert!`)
// window.alert(`I like döner!`)

// document.getElementById("myh1").textContent=`Hello`;
// document.getElementById("myp").textContent=`I like döner`;

// this is a comment

/* 
    This 
    is
    a
    comment
*/

let x=123;

console.log(x);