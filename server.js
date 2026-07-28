require("dotenv").config();

const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const sessionConfig = require("./config/session");
const routes = require("./routes");
const requestLogger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const { DEFAULT_PORT } = require("./config/constants");

const app = express();

app.use(express.static("public"));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(requestLogger);

app.use(routes);
app.use(errorHandler);

const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
  console.log("Running on port", PORT);
});
