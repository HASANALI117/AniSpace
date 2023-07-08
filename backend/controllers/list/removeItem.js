const List = require("../../models/List");

exports.removeItem = async function (req, res) {
  try {
    const listId = req.params.listId;
    const mal_id = req.body.mal_id;

    const list = await List.findById(listId);

    list.anime = list.anime.filter((item) => item.mal_id !== mal_id);

    await list.save();

    res.status(200).json({ message: "Item removed successfully!" });
  } catch (err) {
    console.log("error removing an item:" + err.message);
    res.status(500).json({ message: "error removing an item from list" });
  }
};
