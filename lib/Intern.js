const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "Intern");
    this.school = school;
    this.title = "Intern";
  }
  validateIntern() {
    if (typeof this.school !== "string" || !this.school.trim().length) {
      throw new Error("Expected parameter 'school' to be a non-empty string");
    }
    this.validateEmployee();
  }
  getSchool() {
    return this.school;
  }
  getTitle() {
    return this.title;
  }
}
module.exports = Intern;