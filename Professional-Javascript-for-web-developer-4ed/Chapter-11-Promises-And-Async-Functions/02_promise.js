//promise basic
let p = new Promise(() => {});
setTimeout(console.log, 0, p);

//controlling promise state with the executor
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1);

let p2 = new Promise((resolve, reject) => reject());
setTimeout(console.log, 0, p2);


