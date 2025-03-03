// .......................................................... QUESTION : 01 .................................................................

let a=+prompt("Enter any value");
console.log("The value of a is " + a);

++a;

console.log("The value of ++a is " + a);

console.log("Now the value of a is " + a);

a++;
console.log("The value of a++ is " + a);
console.log("Now the value of a is " + a);

--a;
console.log("The value of --a is " + a);
console.log("Now the value of --a is " + a);

a--;
console.log("The value of a-- is " + a);
console.log("Now the value of a-- is " + a);

// .......................................................... QUESTION : 02 .................................................................

let c= 2 , d=1;
// --c - --d + ++d + d--;
// console.log(c,d);

// --c                             // 1
// console.log(c);
// --d;                            // 0
// console.log(d);
 
// --c - --d;                    // 1 0
// console.log(c,d);

// --c - --d + ++d;                    // 1 1
// console.log(c,d);

--c - --d + ++d + d--;                    // 1 0
console.log(c,d);


// .......................................................... QUESTION : 03 .................................................................

let userName = prompt("Enter your name");
console.log("Hello " + userName);

// .......................................................... QUESTION : 04 .................................................................

let userNo=+prompt("Enter the number of table");
if(isNaN(userNo) || userNo===null){
    userNo=5;
}
for(let i=1; i<=10; i++){
console.log(userNo + "x " + i + "= " + userNo*i)
}

// .......................................................... QUESTION : 05 .................................................................

let subject1=prompt("Enter your first subject name");
let subject2=prompt("Enter your second subject name");
let subject3=prompt("Enter your third subject name");
let totalMarksOfEachSubj=100;
let totalMarks0f3Subj=totalMarksOfEachSubj*3
let subject1Marks=+prompt("Enter your marks of " + subject1);
let subject2Marks=+prompt("Enter your marks of " + subject2);
let subject3Marks=+prompt("Enter your marks of " + subject3);
let obtainedMarks=subject1Marks+ subject2Marks+ subject3Marks
document.write("Your obtained marks is " + obtainedMarks + "</br>");
let percentage=Math.round(obtainedMarks/ totalMarks0f3Subj*100);
document.write("Your percentage is " +percentage);



