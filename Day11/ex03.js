const arr = [1, 2, 3, 4, 5, 6, 100, 3, 1000];

const total = arr
  .filter((item) => item % 2 === 0)
  .reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);

console.log(total);
