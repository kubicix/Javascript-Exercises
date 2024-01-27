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

// let userName="Kubicix Codes";

// let message=userName.charAt(2)
// message=userName.indexOf("x")
// message=userName.length

// let firstName=userName.slice(0,userName.indexOf(" "))
// let lastName=userName.slice(userName.indexOf("C"),userName.length)

// console.log(firstName);
// console.log(lastName);

//callbacks

// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function goodbye(){
//     console.log("goodbye");
// }

// hello(goodbye);
// let fruits=["banana","apple","orange"]

// // fruits.forEach(capitalize);
// fruits.map(capitalize)
// fruits.forEach(display);

// function capitalize(element,index,array){
//     array[index]=element.charAt(0).toUpperCase()+element.slice(1);
// }

// function display(element){
//     console.log(element);
// }

// const hello = () => console.log("Arrow Function!")

// hello();

// const numbers = [1,2,3,4,5,6];

// const squares = numbers.map((number)=>number=Math.pow(number,2));
// const cubes = numbers.map((number)=>number=Math.pow(number,3));

// console.log(squares)
// console.log(cubes)

// const person={
//     firstName:"Tony",
//     lastName:"Stark",
//     age:30,
//     isEmployed:true,
// }

// object destructuring

// function displayPerson({firstName,lastName,age,job}){
//     console.log(firstName+" "+lastName+" "+age+" "+job)
// }

// const person1={
//     firstName:"Sean",
//     lastName:"Paul",
//     age:"36",
//     job:"Singer",
// }

// displayPerson(person1);

// const date = new Date(1311313111231);

// console.log(date);

// class outer{
//     #message ="Hi";

//     inner(){
//         console.log(this.#message);
//     }
// }

// const obj = new outer()
// obj.inner();

// function createCounter(){
//     let count=0;

//     function increment(){
//         count++;
//         console.log("Count increased to "+count);
//     }

//     function getCount(){
//         console.log(count);
//     }

//     return{increment,getCount};
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// //set timeout delay function
// setTimeout(counter.getCount,3000);
//clearTimeout function to stop timeouts

// let timeoutId;

// function startTimer(){
//     timeoutId = setTimeout(() => window.alert("Hello"),3000);
//     console.log("STARTED");
// }

// function stopTimer(){
//     clearTimeout(timeoutId);
//     console.log("STOPPED")
// }

// es6 module importing
 
// import { PI,getArea } from './mathUtil.js';

// console.log(getArea(2).toFixed(2,0)+"cm");

// dom selectors and dom manipulation dom navigation

// const heading=document.getElementById("myh1");

// heading.style.backgroundColor="Turquoise";
// heading.style.textAlign="center";

// let fruits=document.getElementById("fruits");

// const element=fruits.firstElementChild.nextElementSibling;
// element.style.backgroundColor="orange";

// const ul=document.querySelectorAll("ul");

// for(let li of ul){
//     const firstChild = li.firstElementChild;
//     firstChild.style.backgroundColor="yellow"
//     firstChild.nextElementSibling.style.backgroundColor="yellow"
//     firstChild.nextElementSibling.nextElementSibling.style.backgroundColor="yellow"
// }

// callback hell and how to avoid

// function task1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("task 1 completed.");
//         },1000);
//     });  
// }

// function task2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("task 2 completed.");
//         },1000);
//     });  
// }

// function task3(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("task 3 completed.");
//         },1000);
//     });  
// }

// // task1(() => { task2(() => { task3(() => console.log("All tasks completed."))})})

// task1().then(value => {console.log(value);return task2()
//         .then(value => {console.log(value); return task3()
//         .then(value =>{console.log(value); console.log("all tasks finished.")})})});

const names =["Spongebob","Patrick","Squidward","Sandy"];
const person={
    "name":"Spongebob",
    "age":30,
    "isEmployed":true,
    "hobbies":["Jellyfishing","karate","Cooking"]
};
const people=[{
    "name":"Spongebob",
    "age":30,
    "isEmployed":true
},
{
    "name":"Patrick",
    "age":34,
    "isEmployed":true
},
{
    "name":"Squidward",
    "age":50,
    "isEmployed":true
},
{
    "name":"Sandy",
    "age":27,
    "isEmployed":false
}];

const jsonString = JSON.stringify(people);
const jsonObject = JSON.parse(jsonString)
console.log(jsonString);
console.log(jsonObject);

fetch("people.json").then(response => response.json()).then(values => values.forEach(value =>console.log(value.name))).catch(error =>console.error(error));