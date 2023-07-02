const User = require("../../models/user");
const bcrypt = require("bcrypt");

exports.signup = async function (req, res) {
  try {
    console.log(req.body);
    const user = new User(req.body);

    const hash = bcrypt.hashSync(req.body.password, 10);
    console.log(hash);

    user.password = hash;

    await user.save();

    res.json({ message: "User created successfully!" });
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};
