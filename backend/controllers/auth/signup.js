const User = require("../../models/User");
const List = require("../../models/List");
const bcrypt = require("bcrypt");

exports.signup = async function (req, res) {
  try {
    console.log(req.body);
    const user = new User(req.body);

    const favoriteList = {
      title: "Favorites",
      description: "Your favorite items",
    };

    const list = new List(favoriteList);

    await list.save();

    const listId = list._id;

    user.lists.push(listId);

    const hash = bcrypt.hashSync(req.body.password, 10);
    console.log(hash);

    user.password = hash;

    await user.save();

    res.status(200).json({ message: "User created successfully!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
