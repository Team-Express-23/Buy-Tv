"use strict";
const express = require("express");

const init = (data) => {
    const app = express();

    require("./configs/pug.engine.config").init(app);
    require("./configs/passport.config").init(app, data);
    require("./routers/items.router").init(app, data);
    require("./routers/auth.router").init(app);

    return Promise.resolve(app);
};

module.exports = { init };