require("dotenv").config();

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const DiscordStrategy = require("passport-discord").Strategy;

const app = express();

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new DiscordStrategy(
{
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: ["identify"]
},
(accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

app.use(express.static("public"));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/discord",
    passport.authenticate("discord"));

app.get("/auth/discord/callback",
    passport.authenticate("discord", {
        failureRedirect: "/"
    }),
    (req, res) => {
        res.redirect("/profile.html");
    });

app.get("/api/user", (req, res) => {

    if (!req.isAuthenticated())
        return res.status(401).json({
            loggedIn: false
        });

    res.json({
        loggedIn: true,
        username: req.user.username,
        id: req.user.id,
        avatar: req.user.avatar
    });

});

app.get("/logout", (req, res) => {

    req.logout(() => {
        res.redirect("/");
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Running on port", PORT);
});
