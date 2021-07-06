'use strict';

function forEach(fn) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
}

if (!Array.prototype.forEach2) {
  Array.prototype.forEach2 = forEach;
}


const arr = [1,2,3,4];

arr.forEach2((e, i, a) => console.log(e, i, a));

function counter() {
  let i = 0;
  return () => {
    return i++;
  }
}

const c = counter();

console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

const c1 = counter();

console.log(c1());

class Counter {
  #i = 0;

  increment() {
    return this.#i++;
  }

  decrement() {
    return this.#i--;
  }
}

const c2 = new Counter();
console.log(c2.increment())
console.log(c2.increment())
let inco = c2.increment;
// console.log(inco()); <- this would throw


console.log('It is complicated from here');

function complicatedCounter(i = 0) {
   return {
     increment: () => ++i,
     decrement: () => --i,
   };
}

const c3 = complicatedCounter(4);

console.log(c3.increment());
console.log(c3.increment());
console.log(c3.increment());
console.log(c3.increment());
console.log(c3.decrement());
console.log(c3.decrement());
console.log(c3.decrement());
console.log(c3.decrement());


let inc = c3.increment;
console.log(inc());

console.log('Old thing from here:');

function call4times(fn) {
  for (var i = 0; i < 4; i++) {
    ((i) => {
      setTimeout(() => fn(i), 500);
    })(i);
  }
}

call4times((i) => console.log(i))
