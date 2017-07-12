const { Router } = require("express"),
    attach = (app) => {
        const router = new Router();

        router
            .get("/", (req, res) => {
                res.render("home");
            })
            .get("/registration", (req, res) => {
                res.render("registration");
            })
            .get("/products", (req, res) => {
                res.render("products");
            })
            .get("/about", (req, res) => {
                res.render("about_us");
            })
            .get("/:id", (req, res) => {
                res.render("user_id");
            });

        app.use("/", router);
    };

module.exports = attach;