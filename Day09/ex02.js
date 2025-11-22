const c4ejs162 = ["Hoa", "Thao", "Nguyen"];
const c4ejs163 = c4ejs162;

c4ejs163.push("Hoang");

console.log({ c4ejs163 });
console.log({ c4ejs162 });

const copy = [...c4ejs162];
// * shallow copy
copy.push("Thuy Tien");
console.log(copy);
console.log(c4ejs162);
