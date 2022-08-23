const squareNum = (num) => {
  return num ** 2;
};

console.log(squareNum(4));

const squareArr = (arr, fn) => {
  const newArr = [];
  for (const item of arr) {
    newArr.push(squareNum(item));
  }

  return newArr;
};

console.log(squareArr([1, 2, 3, 4, 5, 6], squareArr));
