const sequelize = require("../config/connection");
const { Employee, Manager, Intern, Engineer } = require("../models");
const employeeData = require("./employeeData.json");
const managerData = require("./managerData.json");
const engineerData = require("./engineerData.json");
const internData = require("./internData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const employee = await Employee.bulkCreate(employeeData, {
    returning: true,
  });
  const manager = await Manager.bulkCreate(managerData, {
    returning: true,
  });
  const engineers = await Engineer.bulkCreate(engineerData, {
    returning: true,
  });
  const interns = await Intern.bulkCreate(internData, {
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
