'use strict';

const myNumbers = [8, 42, 144];

myNumbers.forEach((e, i, arr) => console.log(e, i, arr));

const otherNumbers  = [5, 7];

[...myNumbers, ...otherNumbers]
  .forEach((e, i, a) => console.log(a[i + 1]));

console.log(myNumbers.concat(otherNumbers, [9, 99]));
console.log(myNumbers);


const array1 = myNumbers.map((e, i, arr) => e * 2);
console.log(array1);

const array2 = myNumbers.filter((e, i, arr) => e > 10);
console.log(array2);

myNumbers
  .filter(e => e < 100)
  .map(e => e ** 2)
  .forEach(e => console.log(e))

console.log(myNumbers.find((e, i, arr) => i === 2))
console.log(myNumbers.findIndex((e, i, arr) => e > 10))

let newNumbers = [];

myNumbers.forEach(e => {
  if (e > 10) {
    newNumbers.push(e + 3);
  }
});

console.log(newNumbers);
console.log(myNumbers.filter(e => e > 10).map(e => e + 3));

let arr = ['bb', 'aaa', 'c', 'eee', 'bbb'];

arr.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length
});

console.log(arr);

let arr2 = [1,2,3,4,5,6];

console.log(arr2.pop());
console.log(arr2);


let arr3 = [5, 6, 7];

let result = arr3.reduce((acc, e, i, arr) => {
  console.log(e, i);
  return acc + e;
});
console.log(result);
