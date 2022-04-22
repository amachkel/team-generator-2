const router = require("express").Router();
const { Manager } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const managerData = await Manager.findAll();

    res.status(200).json(managerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newManager = await Manager.create({
      ...req.body,
    });

    res.status(200).json(newManager);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update /api/manager/:id
router.put("/:id", async (req, res) => {
  console.log("put request called");
  try {
    const updateEmployee = await Manager.update(
      {
        name: req.body.name,
        email: req.body.email,
        title: req.body.title,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateEmployee);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
