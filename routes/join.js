const express = require("express");

const router = express.Router();

router.get("/join", (req, res) => {
  res.sendFile("join.html", { root: "views" });
});

module.exports = router;
