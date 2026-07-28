const express = require("express");

const router = express.Router();

router.use((req, res) => {
  res.status(404).sendFile("404.html", { root: "views" });
});

module.exports = router;
