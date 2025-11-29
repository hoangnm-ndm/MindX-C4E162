const arr1 = ["Ngo Khong", "Su Phu"];
const arr2 = ["Bat Gioi", "Sa Tang"];

const newClass = [...arr1, ...arr2, "Ngua Bach Long", "Hoang"];

console.log(newClass);

// Shallow Copy: Hầu như các phương của mảng, object dùng có thể để copy thì chỉ copy nông.

const arr = [
  { id: 1, name: "Nguyen Hoang" },
  { id: 2, name: "Nguyen Hung" },
];

const arrShallowCopy = [...arr];

// arrShallowCopy[0].name = "Chua te JS";
// console.log({ arrShallowCopy });
// console.log({ arr });

const arrDeepCopy = structuredClone(arr); // deepcopy

// JSON, lodash... (trước đây sử dụng)
arrDeepCopy[0].name = "Chien Than HTML";
console.log({ arrDeepCopy });
console.log({ arr });

console.log(arrDeepCopy === arr);

const arr3 = ["Hoang"];
const arr4 = ["Hoang"];
const arr5 = arr4;
arr5.push("MindX");

// * So sánh 2 giá trị tham chiếu thì thực ra là so sánh 2 địa chỉ ô nhớ.

console.log(arr3 === arr4);
console.log(arr5);
console.log(arr4);
console.log(arr4 === arr5);
