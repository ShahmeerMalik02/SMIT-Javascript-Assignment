// .................................................... QUESTION : 01 ...........................................................................

let city=prompt("Enter your city");
if(city==="Karachi" || "karachi"){
console.log("Welcome to the city of light");
}

// .................................................... QUESTION : 02 ...........................................................................

let gender=prompt("Enter your gender");
if(gender=== "male"){
    console.log(" Good Morning Sir.");
}else{
    console.log("Good Morning Ma'am");
}

// .................................................... QUESTION : 03 ...........................................................................

let signalColor=prompt("Enter your color");
if(signalColor==="red"){
console.log(" Must Stop ")
}else if(signalColor==="yellow"){
    console.log(" Ready to move ");
}else if(signalColor==="green"){
    console.log(" Move now ");
}else{
    console.log(" Enjoy! your travel");
}

// .................................................... QUESTION : 04 ...........................................................................

let remainingFuel=prompt("Enter your remaining fuel in liter");
if(remainingFuel<0.25){
    console.log("Please refill the fuel in your car");
}else{
    console.log("Enjoy your travel");
}

// .................................................... QUESTION : 05 ...........................................................................

// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// } 

// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 

//  var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 

// if (c === 13){ 
// alert("condition 2 is true"); 
// } 

// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 

// if(c === 14){ 
// alert("condition 4 is true"); 
// } 

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
//  if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// } 

//  if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// }

// .................................................... QUESTION : 06 ...........................................................................

let obtainedMarks=+prompt("Enter your obtained marks");
let totalMarks=+prompt("Enter total marks");
let percentage=obtainedMarks/totalMarks*100;

if(percentage>=80 && percentage<=100){
console.log("A-one " + "Excellent");

}else if(percentage>=70 && percentage<80){
    console.log("A " + "Good");
}

else if(percentage>=60 && percentage<70){
    console.log("B " + "You need to improve" );
}

else if(percentage<60 ){
    console.log("Fail "+ "Sorry");
}

// .................................................... QUESTION : 07 ...........................................................................

let secretNum=Math.floor(Math.random()*10);
let guessNum=+prompt("Enter any number");
if(guessNum===secretNum){
console.log("Bingo! Correct answer")
}else if(guessNum+1===secretNum){
console.log("Close enough to the correct answer")
}else{
    console.log("Try Again");
}

// .................................................... QUESTION : 08 ...........................................................................

let userNo=+prompt("Enter any number");
if(userNo%3==0){
console.log("The number is divisible by 3");
}else{
    console.log("The number is not divisible by 3");
}

// .................................................... QUESTION : 09 ...........................................................................

let userPrompt=+prompt("Enter any number");
if(userPrompt%2==0){
console.log("Even No");
}else{
    console.log("Odd No");
}

// .................................................... QUESTION : 10 ...........................................................................

let temperature=+prompt("Enter your temperature");
if(temperature>40){
    console.log("It is too hot outside.");
}else if(temperature>30){
console.log("The Weather today is Normal.");
}
else if(temperature>20){
console.log("Today’s Weather is cool.");
}
else if(temperature>=10){
console.log("OMG! Today’s weather is so Cool.");
}

// .................................................... QUESTION : 11 ...........................................................................

let firstNum=+prompt("Enter first number");
let secondNum=+prompt("Enter second number");
let operation=prompt("Enter operation between two numbers");
if(operation=="+"){
    console.log(firstNum+secondNum);
}
if(operation=="-"){
    console.log(firstNum-secondNum);
}
if(operation=="*"){
    console.log(firstNum*secondNum);
}
if(operation=="/"){
    console.log(firstNum/secondNum);
}
if(operation=="%"){
    console.log(firstNum%secondNum);
}

