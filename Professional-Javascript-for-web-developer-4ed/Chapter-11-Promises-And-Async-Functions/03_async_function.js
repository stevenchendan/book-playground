//async aka async/await

//async formats
async function foo() {};

let bar = async function() {};

let baz = async () => {};

class Qux {
  async qux() {}
}


//async example
async function foo() {
  console.log(1);
  return Promise.resolve(3);
}

foo().then(console.log);
console.log(2);

//1
//2
//3