// ............................................................. Exercise 1 ....................................................................

let userNo= prompt("Enter any number");
if(userNo>0){
console.log("Positive Number");
}
else if(userNo<0){
    console.log("Negative Number");
}
else if(userNo==0){
    console.log("Zero");
}

// ............................................................. Exercise 2 ....................................................................

let userNumber=prompt("Enter any number");
if(userNumber % 2==0){
console.log("Even")
}
else{
console.log("Odd")
}



// ............................................................. Exercise 3 ....................................................................

let userAge=prompt("Enter your age");
if(userAge>=18){
console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

// ............................................................. Exercise 4 ....................................................................

let userNum1=prompt("Enter your first number");
let userNum2=prompt("Enter your second number");
if(userNum1>userNum2){
console.log(userNum1 + " is greater than " + userNum2);
}
else if(userNum1<userNum2){
console.log(userNum2 + " is greater than " + userNum1);
}
else if(userNum1==userNum2){
console.log(" Both numbers are equal ");
}



// ............................................................. Exercise 5 ....................................................................

let user_age=prompt("Enter your age");
let membership_card = prompt("Have you a membership card?");
if(user_age>=60 || membership_card=="yes"){
console.log("You are eligible for discount offer");
}else{
    console.log("You are not eligible")
}

// ............................................................. Exercise 6 ....................................................................

let userName=prompt("Enter your name");
let userPassword=prompt("Enter your Password");
if(userName==="admin" && userPassword==="12345"){
console.log("Login Successful");
}else{
    console.log("Invalid credentials");
}


// ............................................................. Exercise 7 ....................................................................

let marks=prompt("Enter your marks");
if(marks>=90 && marks<=100){
console.log("A")
}
else if(marks>=80 && marks<90){
console.log("B")
}
else if(marks>=70 && marks<80){
console.log("C")
}
else if(marks>=60 && marks<70){
console.log("D")
}
else if(marks<60){
console.log("F")
}


// ............................................................. Exercise 8 ....................................................................

let userColor=prompt("Enter your signal color");
if(userColor==="red"){
    console.log("Stop");
}
else if(userColor==="yellow"){
    console.log("Slow Down");
}
else if(userColor==="green"){
    console.log("Go");
}