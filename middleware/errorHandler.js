module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).sendFile("500.html", { root: "views" });
};
