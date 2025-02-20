const argon2 = require("argon2");
const User = require("../../../models/user.model");
const JwtService = require("../../../services/jwt.service");

async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await argon2.verify(user.password, password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = new JwtService().encode({ userId: user._id });
  res.json({ token });
  return token;
}

module.exports = { loginUser };
