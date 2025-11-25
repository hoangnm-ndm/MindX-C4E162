const user1 = {
  fullname: "Hoang Nguyen",
  hello: function () {
    console.log(`Xin chao, minh la ${this.fullname} day!`);
  },
};

// * từ khoá `this` trỏ về đúng đối tượng mà đang được nhắc đến trong phương thức.

user1.hello();

const user2 = {
  fullname: "Hoang Nguyen",
  hello: () => {
    console.log(`Xin chao, minh la ${this.fullname} day!`);
  },
};

user2.hello();
