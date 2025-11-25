function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));

/**
 * * Input: Tham số là những biến được dùng để giữ chỗ và dùng trong logic tính toán của hàm.
 * * Output: Kết quả đầu ra của hàm (hàm không trả về thì kết quả trả về là undefined)
 * * Default parameter: Là giá trị mặc định của tham số nếu khi gọi hàm mà không truyền tham số.
 */

/**
 * * Lý do để sử dụng hàm?
 * * 1. Làm code dễ đọc, dễ viết, dễ bảo trì, dễ test, mở rộng.
 * * 2. Tính tái sử dụng code.
 * * 3. Tính đóng gói cao,
 */

function hello(name = "bạn") {
  console.log(`Xin chao ${name}`);
}

const result = hello("Hoang");
console.log(result);

hello();

let i = 10;

function test() {
  let i = 20;
  console.log(i);
}

console.log(i);

test();
