const express = require("express");
const router = express.Router();

//<--import controllers-->>
const verifyPhoneNumberCtrl = require("../controllers/auth/verifyPhoneNumber");
const sendOtpCtrl = require("../controllers/auth/sendOtp");
const signinCtrl = require("../controllers/auth/signin");
const signupCtrl = require("../controllers/auth/signup");

//<--make api routes-->>
router.post("/auth/verify/phone", verifyPhoneNumberCtrl.verifyPhoneNumber);
router.post("/auth/send/otp", sendOtpCtrl.sendOtp);
router.post("/auth/signin", signinCtrl.signin);
router.post("/auth/signup", signupCtrl.signup);

module.exports = router;
