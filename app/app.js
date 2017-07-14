const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const init = (data) => {
    const app = express();

    app.set('view engine', 'pug');
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