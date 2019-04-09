class WeekTemps {
  constructor() {
    this.dataStore = [];
  }

  add(temp) {
    this.dataStore.push(temp);
  }

  average() {
    const total = this.dataStore.reduce((accumulator, currentValue) => accumulator + currentValue);
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
