const AWS = require("aws-sdk");

exports.verifyPhoneNumber = async function (req, res) {
  try {
    const sns = new AWS.SNS({
      region: "me-south-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        sessionToken: process.env.AWS_SESSION_TOKEN,
      },
    });

    const params = {
      PhoneNumber: req.body.phoneNumber,
      OneTimePassword: req.body.otp,
    };

    const result = await sns.verifySMSSandboxPhoneNumber(params).promise();
    console.log("result: ", result);
    console.log("Phone number verified successfully");
    res.status(200).json({ message: "Phone number verified successfully" });
  } catch (err) {
    console.log("Error verifying phone number: ", err);
    res.status(500).json({ message: "Error verifying phone number" });
  }
};
