const topAnimeTv = require("./topAnimeTv");

exports.animeGenre = function (req, res) {
  try {
    const genre = req.params.genre;
    const limit = req.query.limit || 25;

    const filteredShows = topAnimeTv
      .filter((show) =>
        show.genres.some((g) => g.name.toLowerCase() === genre.toLowerCase())
      )
      .slice(0, limit);

    res.status(200).json({ results: filteredShows });
  } catch (err) {
    console.log("error getting items:" + err.message);
    res.status(500).json({ message: "error getting items" });
  }
};
