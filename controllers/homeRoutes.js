const router = require("express").Router();
const { Employee, Intern, Engineer, Manager } = require("../models");
// pages: homepage, teamview

// Homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

//teamview
router.get("/teamview", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const employeeData = await Employee.findByPk({
      include: [
        { model: Intern, attributes: ["school"] },
        { model: Engineer, attributes: ["github"] },
        { model: Manager, attributes: ["officeNumber"] },
      ],
    });

    const employee = employeeData.get({ plain: true });

    res.render("teamview", {
      ...employee,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
