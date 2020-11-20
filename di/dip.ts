interface Waterable {
  water(amount: number): void;
}

class Plant implements Waterable {
  waterLevel: number;

  constructor() {
    this.waterLevel = 0;
  }

  water(amount) {
    this.waterLevel += amount;
  }
}

class Garden {
  waterables: Waterable[];

  constructor() {
    this.waterables = [];
  }

  add(w: Waterable) {
    this.waterables.push(w);
  }

  waterAll() {
    for (let w of this.waterables) {
      w.water(10);
    }
  }
}

class Granny implements Waterable {
  water(amount: number) {
    if (amount > 5) {
      console.log("Chocolate for you! :)");
    } else {
      console.log("Gimme more...");
    }
  }
}

const garden = new Garden();

garden.add(new Plant());
garden.add(new Plant());
garden.add(new Plant());
garden.add(new Plant());
garden.add(new Granny());

garden.waterAll();

console.log(garden);
