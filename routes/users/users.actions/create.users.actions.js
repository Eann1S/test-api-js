const argon2 = require("argon2");
const User = require("../../../models/user.model");

async function registerUser(req, res) {
  const { email, password } = req.body;
  const hashedPassword = await argon2.hash(password);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  res.status(201).json(user);
  return user
}

module.exports = { registerUser };