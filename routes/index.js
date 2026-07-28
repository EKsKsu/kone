const express = require("express");
const authRoutes = require("./auth");
const homeRoutes = require("./home");
const productsRoutes = require("./products");
const dashboardRoutes = require("./dashboard");
const accountRoutes = require("./account");
const apiRoutes = require("./api");
const adminRoutes = require("./admin");
const joinRoutes = require("./join");
const errorRoutes = require("./errors");

const router = express.Router();

router.use("/auth", authRoutes);
router.use(homeRoutes);
router.use(productsRoutes);
router.use(dashboardRoutes);
router.use(accountRoutes);
router.use("/api", apiRoutes);
router.use(adminRoutes);
router.use(joinRoutes);
router.use(errorRoutes);

module.exports = router;
