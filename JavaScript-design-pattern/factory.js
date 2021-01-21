//contractor pattern
//function is what class looks like. function is behind the class
//user1 technically equals to user2. 
//u can use class instead of function 
function User1 (name, age, career) {
  this.name = name;
  this.age = age;
  this.career = career;
}


class User2 {
  constructor(name, age, career) {
    this.name = name;
    this.age = age;
    this.career = career;
  }
};




//factory design pattern
class human {
  constructor(name, age, task, career) {
    this.name = name;
    this.age = age;
    this.task = task;
    this.career = career;
  }

  greeting() {
    return ("I am a " + this.career);
  }
}

function Factory (name, age, career) {
  let work;
  switch (career) {
    case 'student':
      work = ['play', 'study'];
      break;
    case 'teacher':
      work = ['teach', 'prepare'];
      break;
  }
  return new human(name, age, work, career);
}
let student = Factory("steven", 31, "student");
console.log(student.greeting()); //"I am a student"
