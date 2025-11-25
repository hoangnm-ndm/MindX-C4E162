/**
 * * 1. Declaration function (hoisting)
 * * 2. Expression function. (không thể truy cập trước khi khai báo)
 * * 3. Anonymous function -> Cách gọi chung cho những hàm không có tên. (Không có context riêng)
 * * 4. Arrow function
 * * 5. IIFE (Immediately Invoked Function Expression)
 * * 6. Generate function.
 * * 7. Callback
 * * 8. Async function
 * * 9. Constructor function.
 * * 10. Hàm đệ quy.
 */

// hello(); // sai
const hello = function () {
  console.log("bonjour!");
};

console.log(checkValidTypeNumber("Hoang"));

function checkValidTypeNumber(n) {
  if (Number.isNaN(+n)) return "invalid";
  return "valid";
}

const user = {
  username: "hoangnm",
  fullname: "Nguyen Minh Hoang",
  login: function () {
    console.log("dang nhap thanh cong!");
  },
};

user.login();

let count = 0;
document.getElementById("btn").addEventListener("click", function () {
  console.log(`Click ${++count} lan!`);
});

const sum = (a, b) => {
  // logic
  return a + b;
};

const sum2 = (a, b) => a + b;
const returnObj = () => ({ fullname: "Nguyen Hoang" });
console.log(sum2(10, 100));
console.log(returnObj());
