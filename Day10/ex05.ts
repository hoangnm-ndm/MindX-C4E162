type Hello = () => void;

const hello: Hello = function () {
  console.log("bonjour!");
};

type SumFunc = (a: number, b: number) => number;

const sum: SumFunc = (a, b) => {
  return a + b;
};
