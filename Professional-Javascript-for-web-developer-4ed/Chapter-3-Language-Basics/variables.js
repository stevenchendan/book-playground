//Best practice: avoid use var and use let and const instead

// variable hoisting: interpreter pulls all variable declarations to the top of the scope
function foo () {
  console.log(age); //undefined
  var age = 26;
}
foo();

//foo2 == foo given the variable hoisting
function foo2 () {
  var age;
  console.log(age); //undefined
  age = 26;
}
foo2();

//hoisting allow you to use redundant var declaration without panelty
function foo3 () {
  var age = 16;
  var age = 26;
  var age = 36;
}
foo3();

//let and conset is block scope declaration while var is function or global scope
//block scope is introduced in ES6 -> the nearest set of enclosing curly braces {}
//including if blocks, while blocks, function blocks and even standalone blocks
//function block

if (true) {
  let a;
} 
console.log(a); //expected a is not defined

while block
while (true) {
  let b;
}
console.log(b); //expected b is not defined

//function block
function foo() {
  let c;
}
console.log(c); //expected c is not defined

//standalone block
{
  let d; 
}
console.log(d); // expected d is not defined

//let and const throw error when declared twice but var does not(bad)
var a;
var a;

{
  let b;
  let b; //'b' has already been declared 
}
