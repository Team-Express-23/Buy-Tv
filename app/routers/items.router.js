const { Router } = require("express");

const init = (app, data) => {
    const router = new Router(),
        controller = require("./items.controller").init(data);

    router
        .get("/", (req, res) => {
            // console.log('Cookies: ', req.secret);
            res.render("home");
        })
        .get("/products", (req, res) => {
            controller.productsPage(req, res);
        })
        .get("/about", (req, res) => {
            res.render("about");
        });

    app.use("/", router);
};

module.exports = { init };