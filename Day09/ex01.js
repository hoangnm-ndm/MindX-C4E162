const myObj = {
  fullname: "Nguyen Minh Hoang",
  age: 33,
  3: 10,
  true: 10,
};

console.log(myObj);

const myObj2 = new Object({ email: "hoang@gmail.com" });
console.log(myObj2);
console.log(myObj2.address);

console.log({});

//*  chain prototype

const myObj3 = { "ten day du": "nguyen minh hoang" };
console.log(myObj3);

let fullname = "Nguyen Minh Hoang";
let age = 33;
let address = "Bac Giang";

const myInfor = {
  fullname,
  age,
  address,
};

console.log(myInfor);

// * name -> title

// const newKey = window.prompt(
//   "Bay gio ban muon goi ten san pham bang field` nao?"
// );

// const product = {
//   [newKey]: "Iphone 20 promax",
//   price: 2000,
// };

const product = {
  title: "Iphone 20 promax",
  price: 2000,
};

product.price = undefined;

delete product.price;

console.log(product);

const myStudent = {
  fullname: "Nguyen Ngoc Cong Danh",
  age: 22,
  email: "danh001@gmail.com",
};

let countProperties = 0;
for (const key in myStudent) {
  console.log(`${key}: ${myStudent[key]}`);
  countProperties++;
}

// for (const value of myStudent) {
//   console.log(value);
// } -> Sai.

console.log(countProperties);
console.log(myStudent);

console.log("H" < "h");
