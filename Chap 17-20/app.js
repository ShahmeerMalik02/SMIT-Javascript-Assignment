// ...................................................... QUESTION NO:01 .......................................................................

let multiArr=[];
multiArr.push([1,2,3,4,5,6]);
// console.log(multiArr);
multiArr.push(["Ali","Zain","Raza","Anus"]);
// console.log(multiArr);
multiArr.push(["True","False","True"]);
console.log(multiArr);


// ...................................................... QUESTION NO:02 .......................................................................

let multidimensionalArray=[];
multidimensionalArray.push([0,1,2,3]);
multidimensionalArray.push([1,0,1,2]);
multidimensionalArray.push([2,1,0,1]);
console.log(multidimensionalArray);



// ...................................................... QUESTION NO:03 .......................................................................

for(let i=1; i<=10; i++){
console.log(i);
}


// ...................................................... QUESTION NO:04 .......................................................................

let requiredTable=+prompt("Enter a number to show its multiplication table");
let requiredLength=+prompt("Enter a required length of your table");
for(let i=1; i<=requiredLength; i++){
console.log(requiredTable + "*" + i + "=" + requiredTable*i);
}


// ...................................................... QUESTION NO:05 .......................................................................

let arr=["Apple","Mango","Orange","Strawberry"];
for(let i=0; i<arr.length; i++){
console.log(arr[i]);
}



// ...................................................... QUESTION NO:06 .......................................................................

for(let i=1; i<16; i++){
console.log(i);
}

for(let j=15; j>0; j--){
    console.log(j);
}


for(let k=0; k<15; k+=2){
    console.log(k);
}
    

for(let m=1; m<16; m+=2){
    console.log(m);
}

for(let n=1; n<=10; n++){
    console.log((2*n)+ "k");
}    

for(let n=1; n<=10; n++){
    console.log((2*n-1)+ "k");
}    


// ...................................................... QUESTION NO:07 .......................................................................

let array = ["cake","apple pie", "cookie", "chips", "patties"];
let userItem=prompt("What do you want to order");
let a=array.includes(userItem); 
if(a===true){
    console.log(userItem+" is available " )
}else{
    console.log("Sorry "+ userItem + " is not available")
}


// ...................................................... QUESTION NO:08 .......................................................................


let A=[23,45,76,98];
let B=A[0];
console.log(A);
for(let i=0; i<A.length; i++){
    if(A[i]>B){
B=A[i];
    }
}
console.log(B);



// ...................................................... QUESTION NO:09 .......................................................................

let numArray=[25,76,34,12];
let smallestNum=numArray[0];
for(let i=0; i<numArray.length; i++){
    if(numArray[i]<smallestNum){
        smallestNum=numArray[i];
    }
}

console.log(smallestNum);


// ...................................................... QUESTION NO:10 .......................................................................

for(let i=0; i<=100; i++){
if(i%5===0){
    console.log(i);
}
}
