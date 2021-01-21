//canonical create object
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

//Types of Properties
//data properties
let personData = {
  "firstName": "Steven"
}

//defind data attribute(by default it is true)
Object.defineProperty(personData, "lastName", {
  writable: false,
  value: "Chen"
})
console.log(personData.lastName); //Chen

//accessor properties
let book = {
  year_: 2017,
  edition: 1
}
Object.defineProperty(book, "year", {
  get() {
    return this.year_;
  },
  set(newValue) {
    this.year_ = newValue;
    this.edition += 1;
  }
})
console.log(book.edition); //1

book.year = 2018;
console.log(book.edition); //2

//define multiple properties at the same time
let multiplePropertiesBook = {};
Object.defineProperties(multiplePropertiesBook, {
  year_: {
    value: 2017
  },
  
  edition: {
    value: 1
  },

  year: {
    get() {
      return this.year_;
    },
    set(newValue) {
      if (newValue > 2017) {
        this.year_ = newValue;
        this.edition += newValue - 2017;
      }
    }
  }
});

let descriptor = Object.getOwnPropertyDescriptor(multiplePropertiesBook, "year_");
console.log(descriptor.value); //2017
console.log(descriptor.configurable); //false
console.log(descriptor.get); //undefined

let descriptor2 = Object.getOwnPropertyDescriptor(multiplePropertiesBook, "year");
console.log(descriptor2.value); //undefined
console.log(descriptor2.enumerable); //false
console.log(typeof descriptor2.get); //function













//Read Property Attributes
