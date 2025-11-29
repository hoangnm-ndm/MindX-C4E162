const obj1 = {};
// object literal
const obj2 = new Object();

function User(fullname, email, password) {
  this.fullname = fullname;
  this.email = email;
  this.password = password;
  this.hello = function () {
    console.log("Xin chao!");
  };
}

const userA = new User("Nguyen Van A", "a@gmail.com", "111111");

// instance ->

console.log(userA);
console.log(typeof userA);

const students = ["Hoang", "Thao", "Tranh"];
console.log(students);

students.push("Nga");

console.log(students);

console.log(Array.prototype);

// students;

Array.prototype.map2 = function () {
  console.log(`day la phuong thuc map cua toi!`);
};
