const List = require("../../models/List");
const User = require("../../models/User");

//this will remove a list from the database
exports.remove = async function (req, res) {
  try {
    const listId = req.body.listId;
    const user = await User.findById(req.user.id);

    await List.findByIdAndDelete(listId);

    user.lists = user.lists.filter((list) => list.toString() !== listId);

    await user.save();

    res.status(200).json({ message: "List removed successfully!" });
  } catch (err) {
    console.log("error removing a list:" + err.message);
    res.status(500).json({ message: err.message });
  }
};
