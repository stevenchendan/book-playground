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
//shift retrive the first item in array
//unshift is the opposite of shift
let queueArray = new Array();
queueArray.push("red", "green");
//first in first out
console.log(queueArray.shift());//red
console.log(queueArray);//['green']
console.log(queueArray.unshift("black"));//2
console.log(queueArray);//['black', 'green']


//reordering methods
let values = [1, 2, 3, 4, 5];
console.log(values.reverse());// [5, 4, 3, 2, 1]
//sort method
console.log(values.sort()); //[1, 2, 3, 4, 5]


//manipulation methods
let manipulationColors = ["red", "green", "blue"];
console.log(manipulationColors.concat(("yellow", ["black", "brown"])));// ['red', 'green', 'blue', 'yellow', 'black', 'brown']
console.log(manipulationColors);
//slice return the range of items in array
console.log(manipulationColors.slice(1, 2)); //['green']

//splice method - deletion, insertion, replacement
console.log(manipulationColors.splice(0, 2)); //['red', 'green']

let spliceArray = ["red", "green", "blue"];
//remove
let afterSpliceArray = spliceArray.splice(0, 1);
console.log(afterSpliceArray); //['red']
console.log(spliceArray);
//insert
afterSpliceArray = spliceArray.splice(1, 0, 'yellow', 'orange');
console.log(afterSpliceArray);
console.log(spliceArray);
//insert and remove = replace
afterSpliceArray = spliceArray.splice(1, 1, "red", "purple");
console.log(afterSpliceArray); //['yellow']
console.log(spliceArray); //['green', 'red', 'purple', 'orange', 'blue']

//search and location methods
let searchArray = [1, 2, 3, 4, 5, 4, 3, 2, 1];
//return the index of 4
console.log(searchArray.indexOf(4));//3
console.log(searchArray.lastIndexOf(5));//4
console.log(searchArray.includes(4));//true
console.log(searchArray.indexOf(4, 4)); //5 search 4 from index 4
console.log(searchArray.lastIndexOf(4, 4)); //3
console.log(searchArray.includes(4, 7)); //false

let person = { name: "Nicholas" };
let people = [{ name: "Nicholas" }];
let morePeople = [person];
console.log(people.indexOf(person));//-1
console.log(morePeople.indexOf(person)); //0
console.log(people.includes(person)); //false
console.log(morePeople.includes(person)); //true

//predict search: find, findIndex
//find return the matched item
//fineIndex return the matched index
let people2 = [
  {
    name: "Matt",
    age: 27
  },
  {
    name: "Nicholas",
    age: 29
  }
];
console.log(people2.find((element, index, array) => element.age < 28)); //{ name: 'Matt', age: 27 }
console.log(people2.findIndex((element, index, array) => element.age < 28)); //0

//iterative methods
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers.every((item, index, array) => item > 2)); //false
console.log(numbers.some((item, index, array) => item > 2)); // true



