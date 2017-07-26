/* globals __dirname */

const path = require("path"),
    express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    session = require("express-session"),
    passport = require("passport"),
    LocalStrategy = require("passport-local");


const init = (data) => {
    const app = express();

    app.set("view engine", "pug");
    app.use("/libs", express.static(path.join(__dirname, "../node_modules/")));
    app.use("/static", express.static(path.join(__dirname, "../static")));

    require("../routes/server.routes")(app, data);
    require("../routes/routes.path")(app);

    //app middlewares for sessions
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({ secret: "purple unicorn" }));

    //passport setup
    const authStrategy = new LocalStrategy(
        (username, password, done) => {
            done(error, user);
        });


    return Promise.resolve(app);
};

module.exports = {
    init,
};