//two ways to create object
//without curly bracket
let person = new Object();
person.name = "Steven";
person.age = 29;

//object literal notation(I think this is better, easy to maintain)
//in object literal notation we can also use number as property name.
let personLiteral = {
  name: "Steven",
  age: 29,
  5: true
}

let objectExample = {}  // equals to new Object()  I perfer {} as it is easy to write
objectExample.name = "Steven";
objectExample.age = 29;


//object literal can be used as arguments.
//only use this when there are many arguments
function displayInfo(args) {
  let result = ""
  if (typeof args.name == "string") {
    result += " Name: " + args.name;
  }
  if (typeof args.age == "number") {
    result += " Age: " + args.age;
  }
  console.log(result); // Name: Steven Age = 29
}
displayInfo(personLiteral);

//access object property. No differences between these two methods
console.log(person["name"]);
console.log(person.name);

//access object property through bracket has one advantage is that
//we can use variable in the property name
let propertyName = "name";
console.log(person[propertyName]); //Steven
// also you can use bracket to access the propertyname with space or reserved keywords
console.log(person["first name"]);








