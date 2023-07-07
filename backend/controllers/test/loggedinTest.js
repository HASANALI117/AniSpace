exports.loggedinTest = function (req, res) {
  try {
    res.status(200).json({ message: "You are logged in" + req.user });
  } catch (err) {
    res.status(500).json({ message: "Error in loggedinTest" });
  }
};
