const List = require("../../models/List");

exports.getItems = async function (req, res) {
  try {
    const listId = req.params.listId;

    const list = await List.findById(listId);

    res.status(200).json({ items: list.anime });
  } catch (err) {
    console.log("error getting items:" + err.message);
    res.status(500).json({ message: "error getting items" });
  }
};
