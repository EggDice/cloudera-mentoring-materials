
const o1 = {a: 2};


function Kacsa() {
  this.b = 3;
}

Kacsa.prototype = o1;


const rece = new Kacsa();
console.log(rece.a, rece.b);



const masikKacsa = () => {
  return {...o1, b: 3}
}

const rece2 = masikKacsa();

console.log(rece2.a, rece2.b);


// Object composition in the C# way


class Animal {
  constructor() {
    this.belly = 0;
  }

  eat() {
    this.belly += 1;
  }
}

class Pet {
  walk() {
    console.log("Yeey on the walk");
  }
}

class Dog extends Animal {
  excitedEat() {
    eat();
    eat();
    eat();
  }
}


class Dog2 {
  animal = new Animal();
  pet = new Pet();

  excitedEat() {
    this.animal.eat();
    this.animal.eat();
    this.animal.eat();
  }

  //eat() {
  //  this.animal.eat();
  //}

  walk() {
    this.pet.eat();
  }
}

// The fancy JS way

const animal = () => {
  let belly = 0;

  return {
    eat: () => { belly++; },
    status: () => { console.log(belly); }
  };
}

const pet = () => {
  return {
    walk: () => console.log("Yeey");
  }
}

const dog = () => {
  const a = animal();
  const p = pet();

  return {
    excitedEat: () => {
      a.eat();
      a.eat();
      a.eat();
    },
    walk: () => p.walk()
  }
}

const a = animal();

a.eat();
a.eat();
a.eat();
a.eat();
a.status();

setTimeout(animal, 1000);

const { eat, ...r } = animal();
console.log(eat, r);

function kecske({eat}) {

}


