const passport = require("passport");
const DiscordStrategy = require("passport-discord").Strategy;
const { DISCORD_SCOPE } = require("./constants");

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: DISCORD_SCOPE,
    },
    (accessToken, refreshToken, profile, done) => done(null, profile)
  )
);

module.exports = passport;
