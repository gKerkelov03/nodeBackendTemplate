const passport = require("passport"),
    data = require("../../data"),
    { dirLoader } = require("../../utils")

passport.serializeUser((user, done) => {
    if (user) {
        done(null, user.id);
    }
});

passport.deserializeUser((userId, done) =>
    data
        .findUserById(userId)
        .then(user => done(null, user))
        .catch(error => done(error, null))
);

dirLoader
    .loadModulesEndingWithFrom("-strategy", __dirname)
    .forEach(attachStrategy => attachStrategy(passport));

module.exports = app => {
    app.use(passport.initialize());
    app.use(passport.session());
}