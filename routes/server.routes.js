const { Router } = require("express"),
    attach = (app, data) => {
        const router = new Router();

        router
            .get("/", (req, res) => {
                res.render("home");
            })
            .get("/registration", (req, res) => {
                res.render("registration");
            })
            .get("/products", (req, res) => {
                res.render("products", {
                    array: data,
                });
            })
            .get("/about", (req, res) => {
                res.render("about_us");
            })
            .get("/sign_in", (req, res) => {
                res.render("sign_in");
            });

        app.use("/", router);
    };

module.exports = attach;