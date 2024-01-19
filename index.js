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

// let x=123;
// x = Math.PI

// let age =21;
// let message=age >= 18 ? "You're an adult":"You're a kiddo";

let userName="Kubicix Codes";

// let message=userName.charAt(2)
// message=userName.indexOf("x")
// message=userName.length

let firstName=userName.slice(0,userName.indexOf(" "))
let lastName=userName.slice(userName.indexOf("C"),userName.length)

console.log(firstName);
console.log(lastName);