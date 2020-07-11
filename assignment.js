// const arrNum = [6, 5, 3, 9, 2, 1, 4];

// const filteredArray = arrNum.filter(num => num > 5);

// console.log(filteredArray);

// const mappedArray = arrNum.map(n => ({num: n}));

// console.log(mappedArray);

// const reducedNumber = arrNum.reduce((sum, curNum) => sum * curNum, 1);

// console.log(reducedNumber);

// const findMax = (...numList) => {
//   let max = numList[0];
//   let min = numList[0];
//   for (const num of numList) {
//     if (max < num) max = num;
//     if (min > num) min = num;
//   }
//   return [min, max];
// };

// const [minNum, maxNum] = findMax(...arrNum);

// console.log(maxNum, minNum);

// const noDuplicateNum = new Set();

// for (const num of arrNum) {
//   noDuplicateNum.add(num);
// }

// noDuplicateNum.add(9);

// console.log(noDuplicateNum);

//////////////  INSTRUCTOR EXAMPLE  ////////////////
const numbers = [1, -22, 100, 4, 5, 6];

const numsGreater5 = numbers.filter(val => val > 5);
console.log(numsGreater5);

const mappedNumbers = numbers.map(val => ({num: val}));
console.log(mappedNumbers);

const multiplication = numbers.reduce((curResult, curValue) => curResult * curValue, 1);
console.log(multiplication);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);
