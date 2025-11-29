const products = [
  {
    id: 1,
    title: "Iphone 4",
    price: 300,
    stock: 1000,
  },

  {
    id: 2,
    title: "Iphone 5",
    price: 800,
    stock: 200,
  },

  {
    id: 3,
    title: "Xiaomi Poco F8",
    price: 1200,
    stock: 100,
  },
];

const newProducts = [];
const returnResult = products.forEach((item) => {
  // console.log(item);
  // return item;

  if (item.price >= 500) newProducts.push(item);
});
console.log(returnResult);

console.log(newProducts);

// method = callback

const newProducts2 = products.map((item, index) => {
  item.total = item.price * item.stock;
  // return item;
});

console.log(newProducts2);
console.log(products);

// * So sánh và copy Object, Array.

/**
 * * forEach: Duyệt qua từng phần tử của mảng, không trả về.
 *
 * * map: Duyệt qua từng phẩn tử của mảng, trả về mảng mới sau ánh xạ có cùng số lượng phần tử với mảng gốc
 */

console.log([1, 2, 3, 4].map((item) => item * 2));
