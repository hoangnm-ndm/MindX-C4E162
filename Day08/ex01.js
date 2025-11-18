// const myArray1 = [1, 2, 3, 4];
// // Literal

// const myArray2 = new Array("Hoang", 1, 2, 3);

// console.log(myArray1);
// console.log(myArray2);

// console.log(myArray2.length);

const animals = ["cat", "dog", "tom", "jerry"];

// * A. length = index của phần tử cuối + 1.
// * B. length = việc máy tính đã đếm phần tử và trả về phép đếm ???

// for (let i = 0; i <= animals.length; i++) {
//   console.log(animals[i]);
// }

console.log(animals[0]);
console.log(animals[-1]);
console.log(animals[100]);

const demoArr = [1, 2, 3, , , , , 4];
console.log(demoArr.length); // * Mảng thưa
console.log((demoArr[100] = "MindX"));
console.log(demoArr);
console.log(demoArr.length);

// * Tại sao khai báo với const mà array vẫn cập nhật được?

const myString = "Hoang";
myString[0] = "";
console.log(myString);

let myString2 = "MindX";
myString2 = "VietNam";
console.log(myString2);
