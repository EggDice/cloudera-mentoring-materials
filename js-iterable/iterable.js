'use strict';

let iterableObject = {};


iterableObject[Symbol.iterator] = function() {
  let i = 0;
  return {
    next() {
      i++;
      return {value: i, done: i > 5};
    }
  };
};

let it = iterableObject[Symbol.iterator]()
let current = it.next();
while (!current.done) {
  console.log(current.value);
  current = it.next();
}


for (let n of iterableObject) {
  console.log(n);
}
