// ........................................................ QUESTION:01 ...........................................................................

let studentsName=[];

// ........................................................ QUESTION:02 ...........................................................................

let students_Name= new Array();

// ........................................................ QUESTION:03 ...........................................................................

let cources=["Web & App Development" , "Artificial Intelligence" , "Graphic Designing" , "Digital Marketing" , "Introduction of Programming"];
console.log(cources);

// ........................................................ QUESTION:04 ...........................................................................

let arr=[0,1,2,3,4,5,6,7,8,9];
console.log(arr);

// ........................................................ QUESTION:05 ...........................................................................

let booleanArr=["True ", "False" , "True ", "False" , "False"];
console.log(booleanArr);

// ........................................................ QUESTION:06 ...........................................................................

let mixedArr=["Ali", 7 , "True" , "Zain" , "False" , 4];
console.log(mixedArr);

// ........................................................ QUESTION:07 ...........................................................................

let qualificationsArr=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil" , "PhD"];
console.log(qualificationsArr);

// ........................................................ QUESTION:08 ...........................................................................

let studNames=["Ali","Ahmed","Zain","Raza"];
let studScore=[433,253,480,310];
let totalMarks=500;
for(let i=0; i<studNames.length; i++){
let percentage=studScore[i]/totalMarks*100;
console.log("Students Name: "+studNames[i] )
console.log("Students Score: " +studScore[i] + "/" + totalMarks );
console.log("Percentage: " + percentage.toFixed(2) +"%");
console.log("----------------------------------------");
}

// ........................................................ QUESTION:09 ...........................................................................

let colors=["Red","Green","Blue","Black","Orange"];
console.log(colors);
let newColor=prompt("What color do you want to addd at the beginning of an array");
colors.unshift(newColor);
console.log(colors);

let newColorAtEnd=prompt("What color do you want to addd at the end of an array");
colors.push(newColorAtEnd);
console.log(colors);

let addMore=prompt("Enter two more color at the beginning");
colors.unshift(addMore);
console.log(colors);

colors.shift();
console.log(colors);

colors.pop();
console.log(colors);

let userColor=prompt("Which color do you want to add?");
let userIndex=+prompt("at Which index do you want to add");
colors.splice(userIndex,0,userColor);
console.log(colors);

let userDeletedIndex=+prompt("which index you wants to delete color?");
let userDeletedNum=+prompt("how many colors he/she wants to delete?");
colors.splice(1,1);
console.log(colors);

// ........................................................ QUESTION:10 ...........................................................................

let array=[320,170,340,290,15,475];
console.log(array);
array.sort();
console.log(array);


// ........................................................ QUESTION:11 ...........................................................................

let cities=["Karachi","Peshawar","Islamabad","Quetta","Lahore"];
console.log(cities);
console.log(cities.slice(1,3));

// ........................................................ QUESTION:12 ...........................................................................

var jointArray = ["This", "is","my","cat"]; 
console.log(jointArray);
jointString=jointArray.join(" ");
console.log(jointString);

// ........................................................ QUESTION:13 ...........................................................................

let newArr=[]
newArr.push("Keyboard","Mouse","Printer");
console.log(newArr);
for(let i=0; i<newArr.length; i++){
console.log(newArr[i]);
}

// ........................................................ QUESTION:14 ...........................................................................

let newArray=[]
newArray.push("Keyboard","Mouse","Printer");
console.log(newArray);
for(let i=newArray.length; i>=0; i--){
console.log(newArray[i]);
}

// ........................................................ QUESTION:15 ...........................................................................

let phoneManufacturers=["Nokia","Samsung","Apple","Moto"];
document.write("<select>")
for(let j=0; j<phoneManufacturers.length; j++){
    document.write("<option>"+phoneManufacturers[j]+"</option>");
}
document.write("</select>")

