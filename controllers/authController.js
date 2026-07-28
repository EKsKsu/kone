const passport = require("passport");

exports.discordAuth = passport.authenticate("discord");

exports.discordCallback = [
  passport.authenticate("discord", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/profile");
  },
];

exports.logout = (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
};
