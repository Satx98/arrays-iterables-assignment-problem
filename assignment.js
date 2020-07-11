const arrNum = [6, 5, 3, 9, 2, 1, 4];

const filteredArray = arrNum.filter(num => num > 5);

console.log(filteredArray);

const mappedArray = arrNum.map(n => ({num: n}));

console.log(mappedArray);

const reducedNumber = arrNum.reduce((sum, curNum) => sum * curNum, 1);

console.log(reducedNumber);

const findMax = (...numList) => {
  let max = numList[0];
  let min = numList[0];
  for (const num of numList) {
    if (max < num) max = num;
    if (min > num) min = num;
  }
  return [max, min];
};

const [maxNum, minNum] = findMax(...arrNum);

console.log(maxNum, minNum);
