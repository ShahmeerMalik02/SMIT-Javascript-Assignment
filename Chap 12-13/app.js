// .............................................. QUESTION:01 ........................................................................

let char=prompt("Enter any character");
let asciiCode=char.charCodeAt(0);

if(asciiCode>=48 && asciiCode<57){
console.log("Number");
}
else if(asciiCode>=65 && asciiCode<=90){
    console.log("UpperCase Letter");
}
else if(asciiCode>=97 && asciiCode<=122){
    console.log("Lowercase Letter");
}else{
        console.log("The character is not a number or string");
}

// .............................................. QUESTION:02 ........................................................................

let userInteger1=+prompt("Enter your first integer");
let userInteger2=+prompt("Enter second integer");
if(userInteger1>userInteger2){
console.log(userInteger1+ " is greater than " + userInteger2);
}
else if(userInteger1<userInteger2){
console.log(userInteger2+ " is greater than " + userInteger1);
}else{
    console.log(userInteger1 +" and " + userInteger2 + " are equal ");
}

// .............................................. QUESTION:03 ........................................................................

let userNo=+prompt("Enter any number");
if(userNo>0){
console.log("Positive Number");
}
if(userNo<0){
console.log("Negative Number");
}else if(userNo===0){
    console.log("Zero")
}

// .............................................. QUESTION:04 ........................................................................
                                                                                                                                                                             
let stringChar=prompt("Enter any string character");
if(stringChar==="a"||stringChar==="e" ||stringChar==="i" ||stringChar==="o" ||stringChar==="u"){
    console.log("True");
}else {
console.log("False");
}

// .............................................. QUESTION:05 ........................................................................

let password="xyz123";
let userPassword=prompt("Enter your password");
if(userPassword===""){
console.log("Please enter your password");
}else if(userPassword===password){
console.log("Correct! The password you entered matches the original password")
}else{
    console.log("Incorrect password");
}

// .............................................. QUESTION:06 ........................................................................

var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day";
} 
else {
greeting = "Good evening"; 
} 
console.log(greeting);

// .............................................. QUESTION:06 ........................................................................

let time=+prompt("Enter your time");
if(time>=0 && time<1200){
console.log("Good morning");
}
else if(time>=1200 && time<1700){
console.log("Good Afternoon");
}
else if(time>=1700 && time<2100){
console.log("Good evening");
}
else if(time>=2100 && time<2359){
console.log("Good night");
}
