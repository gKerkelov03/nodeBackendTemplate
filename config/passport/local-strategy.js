const LocalStrategy = require("passport-local"),
    data = require("../../data"),
    authStrategy = new LocalStrategy(
        (username, password, done) => {

        }
    );

module.exports = passport => passport.use(authStrategy)