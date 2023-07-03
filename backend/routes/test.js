const express = require("express");
    const router = express.Router();

    //<--import controllers-->>
    const smsCtrl = require("../controllers/test/sms");

    //<--make api routes-->>
    router.post('/test/send/sms', smsCtrl.sms);

    module.exports = router;
