//The Map Type
//Map has overlay with Object

//initialize with new keyword
const mapObject = new Map();
//initialize with new keyword and key/value pairs
const m1 = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"]
])
console.log(m1);

//initialize with cutom-defined
const m2 = new Map({
  [Symbol.iterator]: function*() {
    yield ["key1", "value1"];
    yield ["key2", "value2"];
    yield ["key3", "value3"];
  }
});
console.log(m2.size); //3

//check if key exist?
console.log(m2.has("key1")); //true
//get value by key
console.log(m2.get("key1")); //value1
//size of map object
console.log(m2.size); //3

m2.set("key4", "value4");
console.log(m2.get("key4")); //value4

//order and iteration
//entries() and Symbol.iterator are the two iterators
for (let pair of m2.entries()) {
  console.log(pair);
}
//equals to
for (let pair of m2[Symbol.iterator]()) {
  console.log(pair);
}

//equals to
console.log(...m2);

//WeakMap
let key1 = {id: 1},
    key2 = {id: 2},
    key3 = {id: 3};
const wm1 = new WeakMap([
  [key1, "val1"],
  [key2, "val2"],
  [key3, "val3"],
]);
console.log(wm1.get(key1));//val1
console.log(wm1.get(key2));//val2
console.log(wm1.get(key3));//val3


//Set - set of values, each value occur only once
const s1 = new Set(["val1", "val2", "val3"]);
s1.add("val4");
console.log(s1); //{ 'val1', 'val2', 'val3', 'val4' }

//iterate set
for (const value of s1) {
  console.log(value);
}

//weakmap
let value1 = {id: 1},
    value2 = {id: 2},
    value3 = {id: 3};
let weakMapExample = new WeakSet();
weakMapExample.add(value1);
weakMapExample.add(value2);
weakMapExample.add(value3);












