  const passport = require("passport");
const User = require("../../models/User");

const localStrategy = require("passport-local").Strategy;

passport.serializeUser(async function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, done) {
      //   console.log(1);
      try {
        const user = await User.findOne({ email: email });
        if (!user) {
          console.log("user not found");
          return done(null, false);
        }
        if (!user.verfiyPasswords(password)) {
          console.log("wrong passward");
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        console.log(err.message);
        res.send(err.message);
        return done(err);
      }
    }
  )
);

module.exports = passport;
