const express = require("express");
    const router = express.Router();

    //<--import controllers-->>
const signinCtrl = require("../controllers/auth/signin");
    const signupCtrl = require("../controllers/auth/signup");

    //<--make api routes-->>
router.post('/auth/signin', signinCtrl.signin);
    router.post('/auth/signup', signupCtrl.signup);

    module.exports = router;
