const arr = ["Hoang", "Chien", "Dung", "Obama"];

// const first = arr[0]
// const second = arr[1]

const [first, second, ...rest] = arr;

// destruturing

console.log(first);
console.log(second);
console.log(rest);
