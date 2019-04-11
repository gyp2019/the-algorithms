class WeekTemps {
  private weeks: number[][];

  constructor() {
    this.weeks = [];
  }

  add(week: number[]): void {
    this.weeks.push(week);
  }

  averageWeek(index: number): number {
    const week = this.weeks[index];
    let total: number = 0;
    if (week) {
      total = week.reduce((acc, val) => acc + val);
      return total / week.length;
    }
    return total;
  }

  averageMonth(): number {
    let total: number = 0;
    this.weeks.forEach((week, index) => {
      total += this.averageWeek(index);
    });
    return total / this.weeks.length;
  }
}

const wt = new WeekTemps();
wt.add([52, 55, 61, 65, 55, 50, 52]);
wt.add([49, 51, 55, 61, 65, 69, 71]);
wt.add([64, 61, 61, 62, 57, 56, 54]);
wt.add([54, 54, 56, 58, 55, 58, 61]);
console.log(wt.averageWeek(0));
console.log(wt.averageWeek(1));
console.log(wt.averageWeek(2));
console.log(wt.averageWeek(3));
console.log(wt.averageMonth());

export default WeekTemps;
