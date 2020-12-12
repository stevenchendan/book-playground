function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}
//compare the performance between two type of date comparision
//getTime() is better as it does not need conversion
console.log(bench(diffGetTime)); //?.
console.log(bench(diffSubtract)); //?.
console.log(bench(diffGetTime)); //?.
console.log(bench(diffSubtract)); //?.

