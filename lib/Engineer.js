const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer");
    this.github = github;
    this.title = "Engineer";
  }
  validateEngineer() {
    if (typeof this.github !== "string" || !this.github.trim().length) {
      throw new Error("Expected parameter 'github' to be a non-empty string");
    }
    this.validateEmployee();
  }
  getGithub() {

    return this.github;
  }
  getTitle() {
    return this.title;
  }
}
module.exports = Engineer;
