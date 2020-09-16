// Sync vs Async JavaScript
//sync
let x = 3;
x = x + 4;
console.log(x);

//async
let y = 3;
setTimeout(function() {
  y = y + 4;
  console.log(y);
}, 1000);


//legacy async programming pattern
function double(value) {
  setTimeout(() => console.log(value * 2), 1000);
}
double(3);


//return async value
function double(value, callback) {
  setTimeout(() => callback(value * 2), 1000);
}

double(3, (x) => console.log(`I was given: ${x}`));