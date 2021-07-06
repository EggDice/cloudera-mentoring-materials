'use strict';

function Car() {
  this.km = 0;
  this.fuel = 100;
}

Car.prototype.ride = function ride() {
  this.km += 10;
  this.fuel -= 10;
}

Car.prototype.trunk = true;
console.log(Car.prototype);


let car = new Car();
let car2 = new Car();

car.ride();

car.trunk = false;

Car.prototype.trunk = false;

console.log(car.trunk);
console.log(car);
console.log(car2.trunk);
console.log(car2);

console.log(car2.hasOwnProperty('trunk'))


class Car2 {
  constructor() {
    this.km = 0;
    this.fuel = 100;
  }

  ride() {
    this.km += 10;
    this.fuel -= 10;
  }
}

let car3 = new Car2();
console.log(Car2.prototype.ride);

let obefore = {b: {value: 2}}
let o = Object.create({a: 1}, obefore);

console.log(o.a);

let oo = new Object();
console.log(Object.prototype.constructor)
console.log(oo.__proto__);

console.log(car3.__proto__.constructor);

let newo = {
  apple: 9,
  get apple() { return 5; },
  set apple(a) { console.log("more apples", a); }
};

console.log(newo);
newo.apple = 7;
console.log(newo.apple);

class Volvo extends Car2 {
  #awesomenessLevel = 1000;

  constructor() {
    super();
    this.km += this.#awesomenessLevel;
  }
}

let v = new Volvo();
console.log(v);
