'use strict';

function normalFunc() {
  console.log(this);
}

const arrowFunct = () => { console.log(this) };

class ClassFunc {
  constructor() {
    console.log(this);
  }
}

console.log(typeof normalFunc);

console.log(typeof arrowFunct);

console.log(typeof ClassFunc, ClassFunc.call("apple"));

normalFunc()
new normalFunc()

arrowFunct()
// new arrowFunct()

// ClassFunc()
new ClassFunc()
