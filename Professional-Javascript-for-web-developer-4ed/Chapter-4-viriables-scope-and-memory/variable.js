//Variable declaration

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

