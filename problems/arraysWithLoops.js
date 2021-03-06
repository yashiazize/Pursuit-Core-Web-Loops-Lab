/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForLoop = (array) => {
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    newArr.push(array[i] + "!"); // array[i]
  }
  return newArr;
};
// console.log(shoutForLoop(["apple", "banana", "pineapple"]))
/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */
//function shoutWhileLoop() {}
const shoutWhileLoop = (array) => {
  let newArr = [];
  let i = 0;
  while (i < array.length) {
    newArr.push(array[i] + "!");
    i++;
  }
  return newArr;
};

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */
// for (variable of iterable) {
//   statement
// }

//const array1 = ['a', 'b', 'c'];
// for (const element of array1) {
//   console.log(element);
// }
// expected output: "a"
// expected output: "b"
// expected output: "c"

//function shoutForOfLoop() {}
const shoutForOfLoop = (array) => {
  let newArr = [];
  for (const element of array) {
    newArr.push(element + "!");
  }
  return newArr;
};

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */
//function sumArray() {}
const sumArray = (nums) => {
  let sum = 0;
  for (const element of nums) {
    sum += element;
  }
  return sum;
};
console.log(sumArray([1 , 2 , 4]))
/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */
//function oddArray() {}
const oddArray = (nums) => {
  let arrOfOdds = [];
  for (const elements of nums) {
    if (elements % 2 === 1) {
      arrOfOdds.push(elements);
    }
  }
  return arrOfOdds;
};

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

const evenArray = (nums) => {
  let arr = [];
  for (const elements of nums) {
    if (elements % 2 === 0) {
      arr.push(elements);
    }
  }
  return arr;
};

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

const findSmallest = (nums) => {
  let smallest = nums[0];
  for (const element of nums) {
    if (element <= smallest) {
      smallest = element;
    }
  }
  return smallest;
};

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

const findSecondSmallest = (nums) => {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i]
    if (a < smallest) {
      secondSmallest = smallest;
      smallest = a;
    } else if (a < secondSmallest) {
      secondSmallest = a;
    }
  }
  return secondSmallest;
};

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

const findSecondLargest = (nums) => {
  let largest = -Infinity
  let secondLargest = -Infinity
  for (i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > largest) {
      secondLargest = largest;
      largest = a;
    } else if(a > secondLargest) {
      secondLargest = a
    }
  }
  return secondLargest
}
console.log(findSecondLargest([6,7,2,9]))
/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.
const removeDups = (nums) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
    }
  }
  return arr;
};
// console.log(removeDups([1, 2, 2, 2, 4, 5, 5, 6, 7]));
module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findSecondSmallest,
  findSecondLargest,
  removeDups,
};
