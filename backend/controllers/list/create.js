const User = require("../../models/User");
const List = require("../../models/List");

exports.create = async function (req, res) {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    console.log(user);

    const list = new List({
      title: req.body.title,
      description: req.body.description,
    });

    await list.save();
    const listId = list._id;

    user.lists.push(listId);

    await user.save();

    res.status(200).json({ message: "List created successfully!" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Error creating list" });
  }
};
