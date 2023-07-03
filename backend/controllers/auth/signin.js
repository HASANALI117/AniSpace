const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signin = async function (req, res) {
  try {
    let { phoneNumber, password } = req.body;
    let user = await User.findOne({ phoneNumber });
    console.log(user);

    if (!user) {
      return res.json({ message: "User not found!" }).status(400);
    }

    // Password Comparison
    const isMatch = await user.verfiyPasswords(password);

    if (!isMatch) {
      return res.json({ message: "Password not matched!!" }).status(400);
    }

    // Generate JWT
    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token }).status(200);
      }
    );
  } catch (error) {
    console.log(error);
    res.json({ message: "You are not logged In !!!" }).status(400);
  }
};
