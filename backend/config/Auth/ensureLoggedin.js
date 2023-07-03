const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  var token = "";
  var authToken = req.header("Authorization");
  console.log(authToken);

  if (authToken) {
    authToken = authToken.replace("Bearer ", "");
    console.log(authToken);
    token = authToken;
  }

  if (!authToken) {
    return res.json({ message: "no token found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Your token is invalid" });
  }
};
