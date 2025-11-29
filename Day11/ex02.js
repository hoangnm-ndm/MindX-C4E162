const arr = [1, 2, 3, 4];

let total = 0;
const result = arr.reduce((prev, cur, index, arr) => {
  console.log({ prev, cur, index, arr });
  return (total += cur);
}, 0);

console.log(result);

/**
 * Array.reduce()
 * 1. calback: 4 tham số.
 *  - previousValues(Biến tích luỹ): đầu vào của lần duyệt hiện tại sẽ là value được return của lần duyệt trước đó.
 */

const cart = [
  { id: 1, name: "San pham A", price: 200, quantity: 2, category: "Phu Kien" },
  { id: 2, name: "San pham B", price: 180, quantity: 1, category: "Phu Kien" },
  { id: 3, name: "San pham C", price: 240, quantity: 3, category: "Dien Tu" },
];

// * accumulator
const total2 = cart.reduce((acc, cur) => {
  return (acc += cur.price * cur.quantity);
}, 0);

console.log(total2);

const obj = cart.reduce((acc, cur) => {
  if (!acc[cur.category]) {
    acc[cur.category] = [];
  }
  acc[cur.category].push(cur);
  return acc;
}, {});

console.log(obj);

const animals = ["elephan", "cat", "dog", "cat"];

// * Đếm tần suất xuất hiện.
const res2 = animals.reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 1;
  } else {
    acc[cur]++;
  }
  return acc;
}, {});

console.log(res2);

//  * Loại bỏ phần tử trùng
const res3 = animals.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(res3);
