const router = require("express").Router();
const { Employee, Manager, Engineer, Intern } = require("../../models");

// /api/employees/
router.get("/", async (req, res) => {
  try {
    const employeeData = await Employee.findAll();

    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create /api/employees/
router.post("/", async (req, res) => {
  try {
    const newEmployee = await Employee.create({
      ...req.body,
    });
    if (req.body.title == "manager") {
      const officeNumber = req.body.officeNumber;
      console.log(req.body.title);
      const newManager = {
        employee_id: newEmployee.id,
        officeNumber: officeNumber,
      };
      await Manager.create(newManager);
    } else if (req.body.title === "engineer") {
      const github = req.body.github;
      const newEngineer = {
        employee_id: newEmployee.id,
        github: github,
      };
      await Engineer.create(newEngineer);
    } else {
      const school = req.body.school;
      const newIntern = {
        employee_id: newEmployee.id,
        school: school,
      };
      await Intern.create(newIntern);
    }

    res.status(200).json(newEmployee);
  } catch (err) {
    res.status(400).json(err);
  }
});
// update /api/employees/:id
router.put("/:id", async (req, res) => {
  console.log("put request called");
  try {
    const updateEmployee = await Employee.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateEmployee);
  } catch (err) {
    res.status(400).json(err);
  }
});

//api/employees/:id
router.delete("/:id", async (req, res) => {
  try {
    const employeeData = await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!employeeData) {
      res.status(404).json({ message: "No employee found with this id!" });
      return;
    }

    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
