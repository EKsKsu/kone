exports.getAccount = (req, res) => {
  res.sendFile("account.html", { root: "views" });
};
