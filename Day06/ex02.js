const fullName = "Nguyen Minh Hoang";
// string
let age = 34;
// number
let isMarrired = true;
// boolean

// Object : Đối tượng, thực thể
const myInfor = {
  fullName,
  age,
  major: "Information Technology...",
};

const students = ["Hoang", "Thao", "Thuan"];

const products = [
  { id: 1, name: "Iphone 13 promax", price: 200 },
  { id: 2, name: "Iphone 14 promax", price: 200 },
];

// ! Loai 1: Primitive Type - Kiểu dữ liệu nguyên thuỷ:
// 1. String
// 2. Number
// 3. Boolean
// 4. undefined
// 5. null
// 6. Symbol
// 7. BigInt (kiểu số nguyên lớn)

// * Kiểm tra kiểu bằng từ khoá `typeof`

// ! Loại 2: Reference Type - Kiểu dữ liệu tham chiếu/phức tạp.
// 1. Array
// 2. Object
// 3. Function
// 4. Date
// ...

// undefined:
// Đại diện cho không xác định, không có gì.
// Khi truy cập vào 1 key của object mà không tồn tại, khi khai báo biến không có gía trị, hàm không trả về

// null:
// Đại diện cho không có gì.
// Lập trình viên chủ động gán giá trị null khi chưa có giá trị cụ thể.

let x;
// const y;
console.log(x);

let y = null;
console.log(y);

const myNumber = 10;

console.log({ myNumber });

let myString = new String("Hello");
console.log(myString);
console.log(typeof myString);
console.log(myString.toLocaleLowerCase());
console.log(myString.toUpperCase());
