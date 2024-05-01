class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null); // Масив відвідуваності з 25 елементів
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  present() {
    this._updateAttendance(true);
  }

  absent() {
    this._updateAttendance(false);
  }

  _updateAttendance(isPresent) {
    const nextIndex = this.attendance.findIndex((entry) => entry === null);
    if (nextIndex !== -1) {
      this.attendance[nextIndex] = isPresent;
    } else {
      console.log("Масив відвідуваності повністю заповнений.");
    }
  }

  calculateAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  calculateAttendanceRate() {
    if (this.attendance.length === 0) return 0;
    const presentCount = this.attendance.filter(
      (entry) => entry === true
    ).length;
    return presentCount / this.attendance.length;
  }

  summary() {
    const averageGrade = this.calculateAverageGrade();
    const attendanceRate = this.calculateAttendanceRate();

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

// Eкземпляри студентів
const student1 = new Student("Тарас", "Гладкий", 2000);
student1.addGrade(95);
student1.addGrade(90);
student1.present();
student1.present();
student1.present();
student1.absent();
console.log(
  `${student1.firstName} ${
    student1.lastName
  }, вік: ${student1.getAge()}, середній бал: ${student1.calculateAverageGrade()}, відвідуваність: ${student1.calculateAttendanceRate()}`
);
console.log(student1.summary());

const student2 = new Student("Марія", "Тріска", 2001);
student2.addGrade(85);
student2.addGrade(92);
student2.absent();
student2.absent();
student2.absent();
student2.present();
console.log(
  `${student2.firstName} ${
    student2.lastName
  }, вік: ${student2.getAge()}, середній бал: ${student2.calculateAverageGrade()}, відвідуваність: ${student2.calculateAttendanceRate()}`
);
console.log(student2.summary());
