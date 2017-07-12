/*globals __dirname */

const path = require("path"),
    express = require("express"),
    bodyParser = require("body-parser"),
    configApp = (app) => {
        app.set("view engine", "pug");
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use("/libs", express.static(path.join(__dirname, "../../node_modules")));
        app.use("static", express.static(path.join(__dirname, "../../static")));
    };

module.exports = configApp;