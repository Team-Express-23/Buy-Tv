const { Router } = require("express"),
    passport = require("passport");

const init = (app, data) => {
    const router = new Router(),
        controller = require("./auth.controller").init(data);

    router
        .get("/sign-up", (req, res) => {
            return controller.getSignUpForm(req, res);
        })
        .post("/sign-up", passport.authenticate("local-signup", {
            successRedirect: "/",
            failureRedirect: "/auth/sign-up",
            failureFlash: true,
        }))
        .get("/login", (req, res) => {
            return controller.loginForm(req, res);
        })
        .post("/login", passport.authenticate("local-signin", {
            successRedirect: "/",
            failureRedirect: "/auth/login",
            failureFlash: true,
        }))
        .get("/user", (req, res) => {
            return controller.getUserProfile(req, res);
        })
        .post("/sign-out", (req, res) => {
            return controller.signOut(req, res);
        });

    app.use("/auth", router);
};

module.exports = { init };