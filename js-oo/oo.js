'use strict';

function addToApple(additionalApples, ...rest) {
  this.apple = this.apple + additionalApples;
  console.log(this, additionalApples, rest);
}

const o = {
  addToApple: addToApple,
  apple: 2,
  pear: 4,
};

//addToApple();

o.addToApple();
console.log(o);

addToApple.hello = 'Ciao';
let newObj = {apple: 5};

let newFunct = addToApple.bind(newObj, 6, 8);
console.log(newFunct(3));
console.log(newObj);

let o2 = {
  apple: 4,
  addToApple: newFunct,
}

o2.addToApple();
