let secureApi = (req, res, next) => {
  console.log(req.headers.authorization);

  if (req.headers.authorization == process.env.API_PASSWORD) {
    next();
  } else {
    res.status(400);
    res.send("Invalid api call");
  }
};

module.exports = secureApi;
