const path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local');


const init = (data) => {
    const app = express();

    app.set('view engine', 'pug');
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/libs', express.static(path.join(__dirname, '../node_modules/')));
    app.use("/static", express.static(path.join(__dirname, "../static")));

    require("../routes/routes.path")(app);

    return Promise.resolve(app);
};

module.exports = {
    init,
};