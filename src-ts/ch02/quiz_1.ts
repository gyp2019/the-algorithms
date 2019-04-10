class Grades {
  private grades: number[];
  constructor() {
    this.grades = [];
  }

  add(grade: number): void {
    this.grades.push(grade);
  }

  display(): string {
    const total = this.grades.reduce((acc, value) => acc + value);
    const students = this.grades.length;
    return `${students} students, average: ${total / students}`;
  }
}

const grades: Grades = new Grades();
grades.add(78);
grades.add(88);
grades.add(91);
grades.add(82);
grades.add(85);
console.log(grades.display())

export default Grades;
