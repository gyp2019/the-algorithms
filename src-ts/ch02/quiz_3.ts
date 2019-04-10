type WeeksTemps = number[];

class MonthTemps {
  private store: WeeksTemps[];

  constructor() {
    this.store = [];
  }

  add(week: WeeksTemps): void {
    this.store.push(week);
  }

  averageWeek(index: number): number {
    const week = this.store[index - 1];
    const total = week.reduce((acc, value) => acc + value);
    return total / week.length;
  }

  averageMonth(): number {
    let total = 0;
    this.store.forEach((week, index) => {
      total += this.averageWeek(index + 1);
    });
    return total / this.store.length;
  }
}

const month = new MonthTemps();
month.add([52, 55, 61, 65, 55, 50, 52]);
month.add([49, 51, 55, 61, 65, 69, 71]);
month.add([64, 61, 61, 62, 57, 56, 54]);
month.add([54, 54, 56, 58, 55, 58, 61]);
console.log(month.averageWeek(1));
console.log(month.averageWeek(2));
console.log(month.averageWeek(3));
console.log(month.averageWeek(4));
console.log(month.averageMonth());

export default MonthTemps;
