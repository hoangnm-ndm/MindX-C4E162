/**
 * ! Các phương thức phổ biến của Array:
 * * 1. Nhóm phương thức thay đổi mảng: push, pop, unshift, shift, slice, splice, concat, flat (làm phẳng), sort (toSorted) (sắp xếp), reverse (đảo ngược) (toReversed),...
 * * 2. Nhóm phương thức tìm kiếm: find, findLast, findIndex, findLastIndex, filter, includes, some, every...
 * * 3. Nhóm các phương thức duyệt: forEach, map, reduce...
 * ! Các phương thức tĩnh của Object:
 *
 */

const students = ["Vu", "Thao", "Donal Trump"];

console.log(students.push("Ly Tieu Long", "Ngo Kinh"));

console.log(students);

console.log(students.pop(100)); // trả về chính phần tử bị xoá.
console.log(students);

console.log(students.slice(-3));
console.log(students);

const arr = [1, 2, 3, 4];
console.log(arr.splice(1, 2, "MindX"));
console.log(arr);

const arr2 = ["Hoang", "Chien", "Dung", "Ha Lan"];

const result = arr2.find((item) => item === "Ha Lan");

console.log(result);
console.log(arr2.includes("Ha Lan"));

const teamDuongTang = [
  {
    id: 1,
    name: "Tam Tang",
    age: 30,
    gender: "male",
  },
  {
    id: 2,
    name: "Ngo Khong",
    age: 1000,
    gender: "male",
  },
  {
    id: 3,
    name: "Bat Gioi",
    age: 1500,
    gender: "male",
  },
];

const result2 = teamDuongTang.find((item) => item.age >= 1000);

console.log(result2);

const result3 = teamDuongTang.filter((item) => item.age >= 1000);
console.log(result3);

console.log(teamDuongTang.every((item) => item.gender === "male"));
