const router = require("express").Router();
const { Engineer } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const engineerData = await Engineer.findAll();

    res.status(200).json(engineerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newEngineer = await Engineer.create({
      ...req.body,
    });

    res.status(200).json(newEngineer);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
