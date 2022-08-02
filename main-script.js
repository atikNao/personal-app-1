'use strict';

// // // document.getElementById('counter-el').innerText = 5;

// const { Value } = require("sass");

// // // initialize the count as 0
// // // listener for clicks on the increment button
// // // increment the count variabls when the button is clicked
// // // change the counter-el in the HTML to relected the new counter

// // let count = 0;
// // document.querySelector('#increment-btn').addEventListener('click',function(){
// //     countUp();
// // });

// // document.querySelector('#decrement-btn').addEventListener('click',function(){
// //     countDown();
// // });

// // // document.querySelector('#decrement-btn').addEventListener('click',()=>{
// // //     count -= 1;
// // //     document.querySelector('#counter-el').textContent = count;
// // // });

// // function countUp() {
// //     count += 1;
// //     document.querySelector('#counter-el').textContent = count;
// // }

// // function countDown() {
// //     if(count==0){
// //         alert('Sorry, The Counter is '+count+' first set the counter');            
// //     } else {
// //         count -= 1;
// //         document.querySelector('#counter-el').textContent = count;              
// //     }
// // }

// let count = 0;
// let incrementBtn = document.getElementById('increment-btn');
// let saveBtn = document.getElementById('save-btn');
// let saveEl = document.getElementById('save-el'); 

// incrementBtn.onclick = function(){
//     count += 1;
//    document.getElementById('count-el').textContent = count;
// };

// saveBtn.onclick = function () {

//     let countStr = count +" - ";

//     saveEl.innerText += countStr;
// }

// // Create a calculator

// let num1 = 8;
// let num2 = 2;
// let result = document.getElementById('sum-el');
// document.getElementById('num1-el').textContent = num1;
// document.getElementById('num2-el').textContent = num2;

// function reset() {
//     result.textContent = "Sum :";
// }

// function add() {
//     let sum = num1 + num2;
//     result.textContent += sum;
    
// }

// function sub() {
//     let sum = num1 - num2;
//     result.textContent += sum;
    
// }
// function div() {
//     let sum = num1 / num2;
//     result.textContent += sum;
    
// }
// function mul() {
//     let sum = num1 * num2;
//     result.textContent += sum;
    
// }

const box = document.querySelector('#box');
const item = document.querySelector('#item');

box.addEventListener('click',toggleMenu);

let menuShow = false;

function toggleMenu(){
    if (!menuShow) {
        item.classList.add('rotatebox');
        menuShow = true;
    } else{
        item.classList.remove('rotatebox');
        menuShow =false;
    }
    
};

let showResult = document.getElementById('result');

let fruits = ['Mango','Banana','Apple','Grape','Orange'];
let meets = ['Beffe','mutton','chicken'];

// let myNumbers = [10,10,1,2,5,6,20,95,100,88,57,29,25,874,30];

// // showResult.innerHTML = myNumbers;

// let sorting = false;

// showResult.innerHTML = "Max Value: "+ myArrayMax(myNumbers)+", Min Value: "+minArrayElement(myNumbers);

// function minArrayElement(arr){
//     return Math.min.apply(null, arr);
// }

// function myArrayMax(arr){
//     return Math.max.apply(null,arr);
// }

function arrSorting(){
    if (!sorting) {
        myNumbers.sort(function(a,b){return a-b});
        showResult.innerHTML = myNumbers;
        sorting = true;        
    }else{
        myNumbers.sort(function(a,b){return b-a});
        showResult.innerHTML = myNumbers;
        sorting = false;
    }
    
}

const salary = [5000,5888,4598,6987,4555,1000,8000];
let txt = "";

let bonus = salary.map(getBonus);

function getBonus(value) {
    return value+1000;
}

const employees = [
    {
        id:1001,
        fName:'Atikur Rahman',
        lName:'Atik',
        salary: 5000,
        designation:'Front End Developer',
        country:'Bangladesh'
    },
    {
        id:1002,
        fName:'Anisur Rahman',
        lName:'Anis',
        salary: 4500,
        designation:'Jr. Developer',
        country:'India'
    },
    {
        id:5003,
        fName:'Abdullah Al',
        lName:'Mamun',
        salary: 5000,
        designation:'Software Engineer',
        country:'Bangladesh'
    },
    {
        id:1004,
        fName:'Amina Khatun',
        lName:'Akhi',
        salary: 10000,
        designation:'CEO',
        country:'Pakisthan'
    }
]
// Conditional Ternery Operator
function vote() {
  let age = document.getElementById('age').value;
    age = Number(age);
    if ( isNaN(age)) {
        voteable = "Input is not a number";
    }else{
        let voteable = (age <18) ? 'Too Young':'Old enough';
        document.getElementById('result').textContent = voteable;  

    }
  
}

// Nested Array and Object

const stock = {
    name: 'Finished Good',
    products:[
        {id:1205, name:'Penut Bar', qty:50},
        {id:1552, name:'Twpex', qty:20},
        {id:2545, name:'Lychee', qty:100},
        {id:1256, name:'Dairy Milk', qty:80},
        {id:1582, name:'Chatny', qty:10},
        {id:1987, name:'Chaco chaco', qty:70}
    ]

}
const node = document.createElement('h1');
const txtNode = document.createTextNode(stock.name);
node.appendChild(txtNode);



document.getElementById('demo').appendChild(node);
