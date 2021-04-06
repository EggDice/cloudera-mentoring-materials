'use strict';

let arr = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return {value: i++, done: i > 5};
      }
    };
  }
};


let [a,,b, ...rest] = arr;



console.log(a, b, rest);


let lemons = 1;
//let fruits = {apples: 5}
let fruits = {apples: 5, pears: 6, melons: 3, lemons};

let {apples, ...others} = fruits;

console.log(apples, others);

let numbers = [8,42,144]

console.log(Math.max(...numbers));

console.log([2, ...numbers, ...numbers])

console.log({peach: 2, ...fruits})

console.log([...numbers])

function printThings({thing}) {
  console.log(thing)
}

printThings({thing: 5});


