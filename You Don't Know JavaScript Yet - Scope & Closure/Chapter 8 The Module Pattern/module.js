//Namespace
let Utils = {
  cancelEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  },
  wait(ms) {
    return new Promise(function c(res) {
      setTimeout(res, ms);
    });
  },
  isValidEmail(email) {
    return;
  },
};

//data structure not module
let Student = {
  records: [
    { id: 1, name: "Steven", score: 100 },
    { id: 2, name: "Steven1", score: 101 },
    { id: 3, name: "Steven2", score: 102 },
    { id: 4, name: "Steven3", score: 103 },
  ],
  getName(studentID) {
    var student = this.records.find((student) => student.id == studentID);
    return student.name;
  }
};

console.log(Student.getName(1));


//module
let Student1 = (function defineStudent() {
  let records = [
    { id: 1, name: "Steven", score: 100 },
    { id: 2, name: "Steven1", score: 101 },
    { id: 3, name: "Steven2", score: 102 },
    { id: 4, name: "Steven3", score: 103 },
  ];

  var publicAPI = {
    getName
  };

  return publicAPI;


  function getName(studentID) {
    var student = records.find(
      student => student.id == studentID
    );
    return student.name;
  }

})();
console.log(Student1.getName(2));

//module factory
function defineStudent() {
  let records = [
    { id: 1, name: "Steven", score: 100 },
    { id: 2, name: "Steven1", score: 101 },
    { id: 3, name: "Steven2", score: 102 },
    { id: 4, name: "Steven3", score: 103 },
  ];
  
  var publicAPI = {
    getName
  };

  return publicAPI;

  function getName(studentID) {
    var student = records.find(
      student => student.id == studentID
    );
    return student.name;
  }
}
let student = defineStudent();
console.log(student.getName(2));
