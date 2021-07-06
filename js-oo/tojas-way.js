'use strict';

let f = () => console.log(this)
f();
console.log(this);

const createCar = () => {
  let km = 0;
  let fuel = 100;

  const ride = () => {
    km += 10;
    fuel -= 10;
  }

  const status = () => console.log(km, fuel);

  return {
    ride,
    status,
  };
};

let car = createCar();

car.status();
car.ride();
car.status();

const createVolvo = () => {
  let car = createCar();


  const status = () => {car.status(); console.log("and it is a volvo"); };

  return {
    ride: car.ride,
    status,
  };
};

class Car {
  km = 0;

  ride() {
     this.km += 10;
  }
}

let classCar = new Car();

let r = classCar.ride;

//r();

let r2 = car.ride;

r2();
