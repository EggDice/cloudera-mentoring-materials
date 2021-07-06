'use strict';

function doSomething(a, b, ...rest) {
  // this = {};
  // this.__name__ = "doSomething";
  console.log(this, a, b, rest);
  // return this;
  return 42;
}

doSomething(1,2,3);

doSomething.call({apple: 3}, 1, 2, 3, 4);

let o = {
  pear: 4,
  doSomething,
};

o.doSomething.call({lemon: 5}, 1, 2);

doSomething.bind({peach: 6}).call({cucumber: 8});

doSomething.apply({tomato: 1}, [3, 4, 5, 6])

console.log(doSomething());

console.log(new doSomething());


function ccar() {
  this.km = 0;
  this.fuel = 100;
  this.ride = function ride() {
    this.km += 10;
    this.fuel -= 10;
  }
}

let car = new ccar();
console.log(car);

console.log(ccar.call({}));
