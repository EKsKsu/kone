exports.getProducts = (req, res) => {
  res.sendFile("products.html", { root: "views" });
};
