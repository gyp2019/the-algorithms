class WeekTemps {
  private dataStore: number[];

  constructor() {
    this.dataStore = [];
  }

  add(temp: number): void {
    this.dataStore.push(temp);
  }

  average(): number {
    const total = this.dataStore.reduce((acc, value) => acc + value);
    return total / this.dataStore.length;
  }
}

const thisWeek = new WeekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average());


export default WeekTemps;
