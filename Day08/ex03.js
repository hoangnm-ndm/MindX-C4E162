const myArr = [1, 2, 3];

console.log(typeof myArr);

console.log(Array.isArray(myArr));
// * Đây là cách kiểm tra đúng kiểu của array.
console.log(Array.isArray("MindX"));
console.log(myArr.isArray()); // Sai
console.log(myArr.flat());

// * static method

function User(email, fullname, age) {
  this.email = email;
  this.fullname = fullname;
  this.age = age;
  function hello() {
    console.log(`Xin chao moi nguoi, minh la ${this.fullname}`);
  }
}

User.prototype.hello = function () {};
