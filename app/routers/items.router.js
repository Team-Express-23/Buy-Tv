const { Router } = require("express");

const init = (app, data) => {
    const router = new Router();

    router
        .get("/", (req, res) => {
            res.render("home");
        })
        .get("/products", (req, res) => {
            data.items.getAllItems()
                .then((result) => {
                    res.render("products", {
                        array: result
                    });
                });
        })
        .get("/about", (req, res) => {
            res.render("about");
        });

    app.use("/", router);
};

module.exports = { init };