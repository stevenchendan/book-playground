//promise basic
let p = new Promise(() => {});
setTimeout(console.log, 0, p);

//controlling promise state with the executor
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1); //promise resolved

let p2 = new Promise((resolve, reject) => reject());
setTimeout(console.log, 0, p2); //promise rejected

//state cannot be undo once given
let p = new Promise((resolve, reject) => {
  resolve();
  reject();   //no effect
})

setTimeout(console.log, 0 , p); //Promise resolved

//avoid promise get stuck. defensive code
let p = new Promise((resolve, reject) => {
  setTimeout(reject, 10000);
  //do the executor thing
})

setTimeout(console.log, 0, p);      //Promise Pending
setTimeout(console.log, 11000, p);  //check state after 11 seconds

//After 10 seconds Uncaught error
//after 11 seconds promise rejected



