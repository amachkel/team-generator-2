const router = require("express").Router();
const { Intern } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const internData = await Intern.findAll();

    res.status(200).json(internData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newIntern = await Intern.create({
      ...req.body,
    });

    res.status(200).json(newIntern);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
