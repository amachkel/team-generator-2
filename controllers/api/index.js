const router = require("express").Router();
const employeeRoutes = require("./employeeRoutes");
const managerRoutes = require("./managerRoutes");
const internRoutes = require("./internRoutes");
const engineerRoutes = require("./engineerRoutes");

router.use("/manager", managerRoutes);
router.use("/employees", employeeRoutes);
router.use("/interns", internRoutes);
router.use("/engineers", engineerRoutes);
module.exports = router;
