const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/discord", authController.discordAuth);
router.get("/discord/callback", ...authController.discordCallback);
router.get("/logout", authController.logout);

module.exports = router;
