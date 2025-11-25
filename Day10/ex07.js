function sumary() {
  // console.log(arguments);
  // console.log(typeof arguments);
  // console.log(Array.isArray(arguments)); // false
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
// console.log({ sumary });
// console.log(typeof sumary);

// sumary();

// * Object like Array

sumary(1, 2, 3, "MindX");

/**
 * * Bai 1: Mời người dùng nhập vào thoải mái các tags, các tags cách nhau bởi dấu "," -> đưa tags vào 1 mảng.
 * * Bài 2: Viết hàm nhập vào không giới hạn các tham số cách nhau bởi dấu ",", trả về chuỗi sau khi nối các đối số bởi dấu cách.
 */

// let string = window.prompt("Moi nhap vao tags?")

// Đoạn split (detack).

function createTags(...rest) {
  return rest;
}

console.log(createTags("JavaScript", "PHP", "C++", "Python"));
