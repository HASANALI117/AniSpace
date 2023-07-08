const List = require("../../models/List");

exports.addItem = async function (req, res) {
  try {
    const listId = req.params.listId;

    const list = await List.findById(listId);

    list.anime.push(req.body);

    await list.save();

    res.status(200).json({ message: "Item added successfully!" });
  } catch (err) {
    console.log("error adding an item:" + err.message);
    res.status(500).json({ message: "error adding an item to list" });
  }
};
