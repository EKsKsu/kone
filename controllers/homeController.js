exports.getLanding = (req, res) => {
  res.sendFile("landing.html", { root: "views" });
};

exports.getHome = (req, res) => {
  res.sendFile("home.html", { root: "views" });
};

exports.getProfile = (req, res) => {
  res.sendFile("profile.html", { root: "views" });
};
