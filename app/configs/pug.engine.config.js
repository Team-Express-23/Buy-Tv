/* globals __dirname */

const path = require("path"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    express = require("express"),
    init = (app) => {
        app.set("view engine", "pug");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use("/libs", express.static(path.join(__dirname, "../../node_modules")));
        app.use("/public", express.static(path.join(__dirname, "../../public")));

        app.use(cookieParser("keyboard cat")); // items.router.js
    };

module.exports = { init };