// this middleware logs the request details to the console
exports.requestDetailsLogger = function (req, res, next) {
  // Log the IP address and request method of the client
  console.log(
    `Received ${req.method} request for ${req.originalUrl} from ${req.ip}`
  );
  // Log the request headers
  console.log("Request headers:", req.headers);
  // Log the request body (if it exists)
  if (req.body) {
    console.log("Request body:", req.body);
  }
  next();
};
