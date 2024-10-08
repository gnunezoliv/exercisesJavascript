/*Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/

const data = [1, 2, 3, 4];
const calculator = ( ) =>{

const add = data.reduce((acc, curr) => acc + curr, 0);
const product = data.reduce((acc, curr) => acc * curr, 1);
return {add, product};
}
const result = calculator(data); 
console.log(`The sum is ${result.add}. The product is ${result.product}.`);


