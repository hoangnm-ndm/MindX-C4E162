// Đầu vào là 1 số nguyên dương. (chẵn/lẻ)
// let number = 10;
// if (number % 2 === 0) {
//   console.log(`${number} là số chẵn`);
// } else {
//   console.log(`${number} là số lẻ`);
// }

// let myGender = "nam";

// if (myGender === "nam") {
//   console.log(`ban gioi tinh nam`);
// } else if (myGender === "nu") {
//   console.log(`ban gioi tinh nu`);
// } else {
//   console.log(`ban thuoc gioi tinh khac`);
// }

// * Nhập 1 năm bất kỳ, sau đó in ra thông báo năm nhuận nếu năm đó là năm nhuận.

// * Nhiều hơn 3 case.
// * Điều kiện khó biểu diện bằng giá trị cụ thể.

// let day = +window.prompt("Moi nhap ngay trong tuan (dạng số)");

// switch (day) {
//   case 0:
//     console.log("Chu nhat");
//     break;
//   case 1:
//     console.log("Thu 2");
//     break;
//   case 2:
//     console.log("Thu 3");
//     break;
//   case 3:
//     console.log("Thu 4");
//     break;
//   case 4:
//     console.log("Thu 5");
//     break;
//   case 5:
//     console.log("Thu 6");
//     break;
//   case 6:
//     console.log("Thu 7");
//   default:
//     console.log("Khong hop le!");
// }

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("Ngay trong tuan!");
//     break;
//   case 7:
//   case 0:
//     console.log("Ngay cuoi tuan!");
//     break;

//   default:
//     console.log("Khong hop le!");
// }

// * Phân biệt 1 số là số chẵn hay số lẻ bằng switch case.

// switch (number % 2 === 0) {
//   case true:
//     console.log("la so chan");
//     break;
//   default:
//     console.log("khong la so chan");
// }

// if (true) {
//   console.log("doan code nay luon duoc thuc hien!");
// }

// * falsy values: là các giá trị khi bị ép sang boolean sẽ nhận kết quả là false
/**
 * 1. false
 * 2. 0
 * 3. ""
 * 4. null
 * 5. undefined
 * 6. NaN (Not a Number)
 */

/**
 * truthy values: Nếu không phải falsy values thì là truthy values.
 */
if ("Hoang") console.log("Co chay khong?");

// console.log(Boolean("Hoang"));

// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// console.log(Boolean([]));
console.log(Boolean([]));
console.log([1, 2, 3] + [4, 5, 6]);

// ? A. 0 B. "" C. undefined D. NaN

console.log(!!"Hoang");
console.log(Boolean({}));
console.log(Boolean(NaN));

console.log(Number(true));
console.log(Number(false));

console.log(true + true + false);
