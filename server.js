require("dotenv").config();

const express = require("express");
const session = require("express-session");
const rateLimit = require("express-rate-limit");
const passport = require("./config/passport");
const routes = require("./routes");
const requestLogger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const { DEFAULT_PORT } = require("./config/constants");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(globalLimiter);
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "change-this-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(requestLogger);

app.use(routes);
app.use(errorHandler);

const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
  console.log("Running on port", PORT);
});
