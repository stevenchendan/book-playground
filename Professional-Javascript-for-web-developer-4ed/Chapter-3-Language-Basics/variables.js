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
