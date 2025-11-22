const arr1 = [{ fullname: "Hoang" }];
const arr2 = [...arr1];

// * Shallow copy
// arr2[0].fullname = "MindX";
// console.log(arr2);
// console.log(arr1);

// * Deep copy
const arr3 = structuredClone(arr1);
arr3[0].fullname = "Nguyen Ngoc Thao";
console.log(arr3);
console.log(arr1);
