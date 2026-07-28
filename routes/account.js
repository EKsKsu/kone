const express = require("express");
const accountController = require("../controllers/accountController");

const router = express.Router();

router.get("/account", accountController.getAccount);

module.exports = router;
