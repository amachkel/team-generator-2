const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

Employee.hasOne(Manager, {
  foreignKey: "employee_id",
  onDelete: "CASCADE",
});

Manager.belongsTo(Employee, {
  foreignKey: "employee_id",
  onDelete: "CASCADE",
});

Employee.hasMany(Engineer, {
  foreignKey: "employee_id",
  onDelete: "CASCADE",
});

Engineer.belongsTo(Employee, {
  foreignKey: "employee_id",
  onDelete: "CASCADE",
});

Employee.hasMany(Intern, {
  foreignKey: "employee_id",
  onDelete: "CASCADE",
});

Intern.belongsTo(Employee, {
  foreignKey: "employee_id",
  onDelete: "CASCADE",
});

module.exports = { Employee, Manager, Engineer, Intern };
