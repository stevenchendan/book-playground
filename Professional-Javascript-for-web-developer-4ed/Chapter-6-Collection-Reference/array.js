//different ways of creating array

//creat by constructor
//Create by Array constructor without count of items
let colorsEmpty = new Array();
//Create by Array constructor with count of items
let colorsWithCount = new Array(20);
//Create by Array constructor with passed items
let coloursWithItems =  new Array("red", "blue", "green");

//it is possible to omit the new keyword
let colorWithoutNew = Array(3);
let colorWithoutNewWithItem = Array("Steven");

//create by array literal notation
let colorNotation = ["red", "blue", "green"];
let emptyNotation = [];

//Array.from and Array.of are new introduced property in ES6
console.log(Array.from("steven"));//['s', 't', 'e', 'v', 'e', 'n']
console.log(Array.of(1, 2, 3, 4)); //convert into array [1, 2, 3, 4]

//Array holes
const optionArrayHoles = [1,,,5];
console.log(optionArrayHoles); ///
console.log(optionArrayHoles[2]);//undefined

//Indexing into Arrays
let colorsLength = ["red", "blue", "green"];
console.log(colorsLength.length);
colorsLength.length = 2; 
console.log(colorsLength); //[red, "blue"]

//Detecing Array:
console.log(colorsLength instanceof Array); //true

//detect array regardless of the global execution
if (Array.isArray(colorsLength)) {
  console.log("is array"); //is array
  
}

//Iterator methods keys() values entries()
console.log(Array.from(colorsLength.keys())); //[0, 1]
console.log(Array.from(colorsLength.values()));//['red', 'blue']
console.log(Array.from(colorsLength.entries()));//[[0, 'red'],[1, 'blue']]

for (const [idx, element] of colorsLength.entries()) {
  console.log(idx) //0, 1
  console.log(element); //red, blue
}

//copy and fill method:
const fillArray = [0, 0, 0, 0, 0];
console.log(fillArray.fill(8)); //[8, 8, 8, 8, 8];
console.log(fillArray.fill(7, 1, 3));//[8, 7, 7, 8, 8]
console.log(fillArray.fill(6, -4, -1));//[8, 6, 6, 6, 8]

//copyWithin manipulate array within array
let ints = [0, 1, 2, 3, 4, 5, 7, 8, 9];
console.log(ints.copyWithin(5)); //[0, 1, 2, 3, 4, 0, 1, 2, 3]

//conversion methods toString, valueOf, toLocaleString
let conversionArray = ["red", "blue", "green"];
console.log(conversionArray.toString()); //red,blue,green
console.log(conversionArray.valueOf()); //['red', 'blue', 'green']
console.log(conversionArray.toLocaleString()); //red,blue,green

//join
console.log(conversionArray.join("|")); //red|blue|green

//stack method push and pop
let stackArray = new Array();
let count = stackArray.push("red", "green");
console.log(count);//2

count = stackArray.push("black");
console.log(count);

let item = stackArray.pop();
//last in last out
console.log(item);

//queue like with push and shift
let queueArray = new Array();
queueArray.push("red", "green");
//first in first out
console.log(queueArray.shift());//red












