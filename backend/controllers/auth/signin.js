const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signin = async function (req, res) {
  try {
    let { phoneNumber, password } = req.body;
    let user = await User.findOne({ phoneNumber }).populate("lists");
    console.log(user);

    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    // Password Comparison
    const isMatch = await user.verfiyPasswords(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Password not matched!!" });
    }

    const favoritesList = user.lists.find((list) => list.title === "Favorites");
    const favoritesListId = favoritesList._id.toString();

    // Generate JWT
    const payload = {
      user: {
        id: user._id,
        name: user.firstName,
        favListId: favoritesListId,
      },
    };

    console.log(payload);

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
