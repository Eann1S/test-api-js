const { Router } = require("express");
const actions = require("./users.actions");
const validator = require("./users.validator");

const router = Router();

router.post("/register", 
  ...validator.registerUser,
  async (req, res) => {
    const user = await actions.registerUser(req, res);
    res.status(201).json(user);
  }
);

router.post("/login",
  ...validator.loginUser,
  async (req, res) => {
    const token = await actions.loginUser(req, res);
    res.status(200).json({ token });
  }
);

module.exports = router;
