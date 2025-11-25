function count(number) {
  number++;
  if (number <= 100) {
    console.log(number);
    count(number);
  }
}

count(1);
