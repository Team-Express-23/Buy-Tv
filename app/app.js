const express = require("express"),
    app = express();

require("./config/app.config")(app);
require("../routes/routes.path")(app);

module.exports = app;