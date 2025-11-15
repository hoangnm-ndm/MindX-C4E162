// ? Kiểm tra xem số nhập vào có phải số chẵn không?

let number = +window.prompt("Moi nhap vao 1 so!");

// validation
// console.log(number);
// console.log(number);
// console.log(NaN === NaN);
// console.log(Number.isNaN(NaN));
// * NaN = Not a Number: Là một giá trị đặc biệt kiểu số dùng để thể hiện giá trị số không hợp lệ
// kiem tra number
if (Number.isNaN(number)) {
  console.log("Gia tri nhap vao khong hop le!");
}

if (number % 2 === 0) {
  console.log("Day la so chan");
} else {
  console.log("Day khong la so chan");
}
