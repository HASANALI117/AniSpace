const User = require("../../models/User");

exports.getLists = async function (req, res) {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate("lists");

    console.log(user);

    res.status(200).json({ lists: user.lists });
  } catch (err) {
    console.log("error getting lists:" + err.message);
    res.status(500).json({ message: "error getting lists" });
  }
};
