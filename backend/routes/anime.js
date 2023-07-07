const express = require("express");
    const router = express.Router();

    //<--import controllers-->>
const movieGenreCtrl = require("../controllers/anime/movieGenre");
    const animeGenreCtrl = require("../controllers/anime/animeGenre");

    //<--make api routes-->>
router.get('/movie/:genre', movieGenreCtrl.movieGenre);
    router.get('/anime/:genre', animeGenreCtrl.animeGenre);

    module.exports = router;
