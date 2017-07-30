const session = require("express-session"),
    passport = require("passport"),
    Strategy = require("passport-local"),
    config = require("./mongoDB.connection.config");

const init = (app, data) => {
    const signinStrategy = new Strategy((username, password, done) => {
        data.users.checkPassword(username, password)
            .then((user) => {
                done(null, user);
            })
            .catch((err) => {
                done(err);
            });
    });

    const signupStrategy = new Strategy({
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
    }, (req, username, password, done) => {
        data.users.createUser(req.body)
            .then((user) => {
                done(null, user);
            })
            .catch((err) => {
                done(err);
            });
    });

    passport.use("local-signin", signinStrategy);
    passport.use("local-signup", signupStrategy);

    app.use(session({
        secret: config.sessionSecret,
        resave: true,
        saveUninitialized: true,
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        // console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        data.users.findById(id)
            .then((user) => {
                done(null, user);
            }).catch(done);
    });

    app.use((req, res, next) => {
        res.locals = {
            user: req.user,
        };

        next();
    });
};

module.exports = { init };