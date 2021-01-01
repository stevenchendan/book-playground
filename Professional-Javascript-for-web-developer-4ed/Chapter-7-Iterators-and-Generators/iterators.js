//Iteration
//counting loop is the simplest iteration
let array = ['foo', 'bar', 'baz'];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element); //foo, bar, baz
}

//foreach interator is introduced in ES5
array.forEach((item) => console.log(item)); //foo, bar, baz


//array destructuring
let [a, b, c] = array;
console.log(a, b, c);// foo bar baz

//spread operator
let arr2 = [...array];
console.log(arr2);//['foo', 'bar', 'baz']

//array.from()
let arr3 = Array.from(array);
console.log(arr3); //['foo', 'bar', 'baz']

//set constructor
let set = new Set(array);
console.log(set); //Set {'foo', 'bar', 'baz'}

//map constructor
let pairs = array.map((x, i) => [x, i]);
console.log(pairs); //[['foo', 0], ['bar', 1], ['baz', 2]]

let map = new Map(pairs);
console.log(map); // Map {'foo' => 0, 'bar' => 1, 'baz' => 2}

//an object implement Iterable interface if a parent class up the prototype chain implements the interface
class FooArray extends Array {}
let fooArray = new FooArray('foo', 'bar', 'baz');
for (const item of fooArray) {
  console.log(item); //foo, bar, baz
}

//Iterator protocol
let arr = ['foo', 'bar'];
console.log(arr[Symbol.iterator]);
let iter = arr[Symbol.iterator]();
console.log(iter.next()); //{value: 'foo', done: false}
console.log(iter.next()); //{value: 'bar', done: false}
console.log(iter.next()); //{value: undefined, done: true}

let array2 = ['foo', 'bar'];
let iter1 = array2[Symbol.iterator]();
let iter2 = array2[Symbol.iterator]();

console.log(iter1.next()); //{value: 'foo', done: false}
console.log(iter2.next()); //{value: 'foo', done: false}
array2.splice(1, 0, 'mid');
console.log(iter1.next()); //{value: 'mid', done: false}
console.log(iter2.next()); //{value: 'mid', done: false}
console.log(iter1.next()); //{value: 'bar', done: false}
console.log(iter2.next()); //{value: 'bar', done: false}
console.log(iter1.next()); //{value: undefined, done: true}
console.log(iter1.next()); //{value: undefined, done: true}

//custom iterator defination


//early terminator
//break, continue, return, throw





