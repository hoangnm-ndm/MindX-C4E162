let a: string = "Hoang";
a = "Hello TypeScript";
let b: number = 10;
let c: boolean = true;

type Infor = { email: string; address: string; gender: string };

let myInfor: Infor = {
  email: "hoang@gmail.com",
  address: "Hanoi",
  gender: "male",
};

interface Product {
  id: number;
  title: string;
  price?: number;
}

const students: string[] = ["hoang", "nam", "hung"];
const myList: [number, string, string] = [1, "nam", "hung"];
const productList: Product[] = [
  { id: 1, title: "Iphone" },
  { id: 2, title: "Samsung" },
];

type Gender = "Female" | "Male" | "Other";

enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
const dir: Direction = Direction.Right;
