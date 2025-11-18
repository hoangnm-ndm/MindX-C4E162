const myArr = [1, 2, 3];

/**
 * * Hãy dùng kiến thức về vòng lặp for để tạo ra 1 mảng đảo ngược của mảng myArr.
 */

const result = [];
for (let i = 0; i < myArr.length; i++) {
  // * result[?] = ?
}

for (let i = 0; i < myArr.length; i++) {
  if (myArr[i] === 2) {
    console.log(`a đây rồi, nó ở chỗ ${i}`);
  }
}

console.log(myArr);

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

// * Prototype chain

// function Array1 () {

// }

// * function constructor
function User(email, fullname, age) {
  this.email = email;
  this.fullname = fullname;
  this.age = age;
}
// * từ khoá this - trong hoàn cảnh này có nghĩa là chính User (tên của hàm khởi tạo).

const user1 = new User("thao@gmail.com", "Nguyen Thao", 18);
console.log(user1);

// * string -> String
// * number -> Number
// * array -> Array

console.log([1, 2, 3, , , , , , , , , 10].flat());

/**
 * C = Create
 * R = Read
 * U = Update
 * D = Delete
 */
