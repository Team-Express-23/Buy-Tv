/* globals __dirname */
"use strict";

const path = require("path"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    express = require("express"),
    init = (app) => {
        app.set("view engine", "pug")
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({ extended: true }))
            .use("/libs", express.static(path.join(__dirname, "../../node_modules")))
            .use("/public", express.static(path.join(__dirname, "../../public")))
            .use(cookieParser("keyboard cat"));
    };

module.exports = { init };