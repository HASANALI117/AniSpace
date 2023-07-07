const List = require("../../models/List");

exports.addItem = async function (req, res) {
  try {
    const listId = req.body.listId;
    const item = {
      animeTitle: req.body.animeTitle,
      mal_id: req.body.mal_id,
      image_url: req.body.image_url,
      rating: req.body.rating,
      genres: req.body.genres,
    };

    const list = await List.findById(listId);

    list.anime.push(item);
    await list.save();

    res.status(200).json({ message: "Item added successfully!" });
  } catch (err) {
    console.log("error adding an item:" + err.message);
    res.status(500).json({ message: "error adding an item to list" });
  }
};
