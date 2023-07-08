const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  var token = "";
  var authToken = req.header("Authorization");

  if (authToken) {
    authToken = authToken.replace("Bearer ", "");
    token = authToken;
  }

  if (!authToken) {
    return res.status(400).json({ message: "no token found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Your token is invalid" });
  }
};
