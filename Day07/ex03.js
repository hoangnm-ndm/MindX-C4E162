// "use strict"; // chế độ nghiêm ngặt

console.time("demthoigianchaycode");

let i = 0;
// for (;;) {
//   // block code
//   if (i <= 1000) {
//     console.log(i);
//   } else {
//     break;
//   }
//   i++;
// }

// for (;;) {
//   // block code
//   if (i > 10) {
//     break;
//   }
//   console.log(i++);
// }

for (;;) {
  // block code
  if (i > 10) {
    break;
  }
  console.log(i++);
}

console.timeEnd("demthoigianchaycode");
let even = [];
let odd = [];
for (let j = 0; j <= 100; j++) {
  if (j % 2 === 0) {
    even.push(j);
  } else {
    odd.push(j);
  }
}

console.log(`mang cac so chan: ${even}`);
console.log(`mang cac so le: ${odd}`);

/**
 * Kết luận:
 * for loop thường được áp dụng cho những bài toán sau:
 * 1. Biết rõ số lần lặp hoặc logic thoát vòng lặp rõ ràng.
 */

/**
 * * for:
 * * Bước 1: Khai báo biến đếm.
 * * Bước 2: Kiểm tra điều kiện
 * * Bước 3: Thực hiện khối code nếu điều kiện đúng?/Nếu sai thì dừng luôn
 * * Bước 4: Thực hiện bước nhảy sau đó quay lại bước 2
 */
