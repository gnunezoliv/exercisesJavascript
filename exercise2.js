/*Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/

const numbers = [1, 2, 4, 5];
const doubles = numbers.map(function (num) {
  return num * 2;
});
console.log("original array: " + numbers);
console.log("after array.map: " + doubles);