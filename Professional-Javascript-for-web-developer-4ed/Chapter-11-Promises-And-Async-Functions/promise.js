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


//return async value this is pesudo code not runable
function asyncReturnValue(value, callback) {
  setTimeout(() => callback(value * 2), 1000);
}

asyncReturnValue(3, (x) => console.log(`I was given: ${x}`));


function asyncHandleFailure(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== 'number') {
        throw 'Must provide number argument';
      }
      success(value);
    } catch(e) {
      failure(e);
    }
  }, 1000);
}

const successCallback = (x) => console.log(`Success: ${x}`);
const failureCallback = (e) => console.log(`Failure: ${e}`);

asyncHandleFailure(3, successCallback, failureCallback);

//nesting async callbacks example
function nestingCallback(value, success, failure) {
	setTimeout(() => {
    try {
      success(value);
    } catch(e) {
      failure(e);
    }
  }, 1000)
}
const nestingSuccessCallback = (x) => {
	nestingCallback(x, (y) => console.log(`nesting value is ${x}`))
}
const nestingFailureCallback = (e) => {
  console.log(`error message: {e}`)
}
nestingCallback(3, nestingSuccessCallback, nestingFailureCallback);