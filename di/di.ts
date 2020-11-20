class HardYearDetector {
  date: Date;

  constructor(date: Date) {
    this.date = date;
  }

  detect(): boolean {
    return this.date.getFullYear() === 2020;
  }
}

console.log((new HardYearDetector(new Date())).detect())
console.log((new HardYearDetector(new Date('2021-01-01'))).detect())

/*
new HardYearDetector(new Date());

new Jun(new Gor(new Ban))

hardYearDetector.date = new Date();

hardYearDetector,setDaite(new Date());


*/
