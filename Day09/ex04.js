let number = 10;

let string = "Hoang";

console.log(string.toUpperCase());
console.log(typeof string);

console.log(new Number(10));
console.log(new String(10));
console.log(new Object({ email: "hoang@gmail.com" }));

class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.login = function login() {
      console.log("hello");
    };
  }
}

User.prototype.login = function () {
  console.log(`email: ${this.email}, password: ${this.password}`);
  console.log("Login thanh cong!");
};

// const user1 = new User("Hoang Nguyen", "hoang@gmail.com", "123");
const user2 = new User("Khoa Nguyen", "khoa@gmail.com", "123");

// const obj2 = new Object();

// console.log({ user1 });
console.log({ user2 });
console.log(user2.login());

// prototype chain

/**
 * * static method
 * * Object.freeze()
 * * Object.values()
 * * Object.keys()
 * * Object.entries()
 */

/**
 * * Trong JS có bao nhiêu cú pháp function?
 */
