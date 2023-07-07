const topAnimeMovies = require("./topAnimeMovies");

exports.movieGenre = function (req, res) {
  try {
    const genre = req.params.genre;
    const limit = req.query.limit || 25;

    const filteredMovies = topAnimeMovies
      .filter((movie) =>
        movie.genres.some((g) => g.name.toLowerCase() === genre.toLowerCase())
      )
      .slice(0, limit);

    res.status(200).json({ results: filteredMovies });
  } catch (error) {
    console.log("error getting items:" + error.message);
    res.status(500).json({ message: "error getting items" });
  }
};
