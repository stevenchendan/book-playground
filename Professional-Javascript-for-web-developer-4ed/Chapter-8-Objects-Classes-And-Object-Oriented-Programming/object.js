//create object
let person = new Object();
person.name = "Steven";
person.age = 30;
person.job = "Software Engineer";
person.sayName = function() {
  return this.name;
}
console.log(person); //{ name: 'Steven', age: 30, job: 'Software Engineer' }
console.log(person.sayName());//Steven


//create object in object literal way
let personObjectLiteral = {
  name: "Steven",
  age: 30,
  job: "Software Engineer",
  sayName() {
    return this.name;
  }
}
console.log(personObjectLiteral); //{ name: 'Steven', age: 30, job: "Software Engineer", sayName:... }
console.log(personObjectLiteral.sayName()); //Steven


