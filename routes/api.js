const express = require("express");
const apiController = require("../controllers/apiController");

const router = express.Router();

router.get("/user", apiController.getCurrentUser);

module.exports = router;
