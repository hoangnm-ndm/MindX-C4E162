interface User {
  id: string;
  fullname: string;
  age: number;
  email: string;
  address?: string;
}

interface Student extends User {
  studentId: string;
}

type UserType = {
  id: string;
  fullname: string;
  age: number;
  email: string;
  address?: string;
};

const myStudent: User = {
  id: "abhgfc",
  fullname: "Nguyen Ngoc Cong Danh",
  age: 22,
  email: "danh001@gmail.com",
  address: "Bac Giang",
};

const myStudent2: User = {
  id: "2",
  fullname: "Nguyen Ngoc Cong Danh",
  age: 22,
  email: "danh001@gmail.com",
};

// * Pick, Omit, Partial, Record
