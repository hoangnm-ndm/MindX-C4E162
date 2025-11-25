// console.log(1, 2, 3, "Hoang", { company: "MindX" });

// * Diễn giải lại cách người ta viết ra những hàm dựng sẵn.
// const console = {
//   log: function () {},
// };

// cosole.log();
/**
 * * Viết hàm `sum` truyền vào số lượng tham số không xác định cách nhau bởi dấu phẩy.
 * * Output: tính tổng các giá trị truyền vào nếu chúng hợp lệ
 */

function sum(a, b, ...rest) {
  console.log({ a });
  console.log({ b });
  console.log({ rest });
}

sum(1, 2, 3, 4, 5, 5, 6, 6, 76, 7);

// * rest oparator là toán tử gom toàn bộ phần còn lại của tham số (khi dùng với hàm) hoặc phần tử của mảng, object.

function tinhTong(...rest) {
  console.log(rest);
  console.log(Array.isArray(rest));
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    if (!Number.isNaN(+rest[i])) sum += +rest[i];
  }
  return sum;
}

// * Number.isNaN() !== isNaN()

console.log(
  tinhTong(1, 2, 3, 4, "10", true, false, "Hoang", null, undefined, NaN)
);
