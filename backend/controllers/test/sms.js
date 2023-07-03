const AWS = require("aws-sdk");

exports.sms = async function (req, res) {
  try {
    const sns = new AWS.SNS({
      region: "me-south-1",
      credential: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        sessionToken: process.env.AWS_SESSION_TOKEN,
      },
    });

    const params = {
      Message: req.body.message,
      PhoneNumber: req.body.phoneNumber,
    };

    const result = await sns.publish(params).promise();
    console.log("SMS sent successfully:", result.MessageId);
    res.status(200).json({ message: "SMS sent successfully" });
  } catch (err) {
    console.log("Error sending SMS: ", err);
    res.status(500).json({ message: "Error sending SMS" });
  }
};
