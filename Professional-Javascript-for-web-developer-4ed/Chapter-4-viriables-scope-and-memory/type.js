//function argument

//primitive
function addTen(num) {
  num += 10;
  return num;
}
console.log(addTen(10)) //20

//reference
function addName(obj) {
  obj.name = "Steven";
}
let person = new Object();
addName(person);
console.log(person.name)//Steven


//prove the object are passed by value
function setName(obj) {
  obj.name = "Steven";
  obj = new Object();
  obj.name = "Chen";
}
let person2 = new Object();
setName(person);
console.log(person.name); //output: Steven   This approve that the function reference argument is passed by value


let colors = [1, 2, 3];
//determine types:
console.log(typeof "test"); //string
console.log(typeof 12); // number
console.log(typeof true); // boolean
console.log(typeof undefined); //undefined
//reference type always return object for typeof
console.log(typeof new Object()); //object
console.log(typeof setName)// output: function

//for reference type we need to know which category it is so that we use instanceof to determine that
console.log(person2 instanceof Object) // return true
console.log(colors instanceof Array); //return true



