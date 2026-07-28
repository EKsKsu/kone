const express = require("express");
const homeController = require("../controllers/homeController");

const router = express.Router();

router.get("/", homeController.getLanding);
router.get("/home", homeController.getHome);
router.get("/profile", homeController.getProfile);

module.exports = router;
