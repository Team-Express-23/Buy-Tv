/*globals __dirname */

const path = require("path"),
    fs = require("fs"),
    attachRoutes = (app) => {
        fs
            .readdirSync(__dirname)
            .filter((file) => file.includes("routes.js"))
            .map((file) => path.join(__dirname, file))
            .forEach((modulePath) => {
                require(modulePath)(app);
            });
    };

module.exports = attachRoutes;