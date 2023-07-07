const express = require("express");
const router = express.Router();

const ensureLoggedin = require("../config/Auth/ensureLoggedin");

//<--import controllers-->>
const loggedinTestCtrl = require("../controllers/test/loggedinTest");
const smsCtrl = require("../controllers/test/sms");

//<--make api routes-->>
router.get("/test/loggedin", ensureLoggedin, loggedinTestCtrl.loggedinTest);
router.post("/test/send/sms", smsCtrl.sms);

module.exports = router;
