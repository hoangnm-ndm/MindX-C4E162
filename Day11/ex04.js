const infor = {
  email: "hoang@gmail.com",
  password: "111111",
};

const socialInfor = {
  facebook: "fb/hoangnm.com",
  zalo: "0377653123",
};

console.log(Object.keys(infor));
console.log(Object.values(infor));
console.log(Object.entries(infor));

const mergeInfor = Object.assign({}, infor, socialInfor);

console.log(mergeInfor);
console.log(infor);

const nullObject = Object.create(null);
// Null prototype object
console.log(nullObject);

console.log({});
