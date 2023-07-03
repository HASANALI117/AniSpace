const AWS = require("aws-sdk");

exports.sendOtp = async function (req, res) {
  try {
    const sns = new AWS.SNS({
      region: "me-south-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        sessionToken: process.env.AWS_SESSION_TOKEN,
      },
    });

    // Add phone number to the sandbox
    const sandboxParams = {
      PhoneNumber: req.body.phoneNumber,
    };

    await sns.createSMSSandboxPhoneNumber(sandboxParams).promise();
    console.log("Phone number added to the sandbox");

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    console.log("Error sending OTP: ", err);
    res.status(500).json({ message: "Error sending OTP" });
  }
};
