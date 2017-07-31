"use strict";
const { Router } = require("express"),
    passport = require("passport");

const init = (app) => {
    const router = new Router();

    router
        .get("/sign-up", (req, res) => {
            res.render("auth/sign-up");
        })
        .post("/sign-up", passport.authenticate("local-signup", {
            successRedirect: "/",
            failureRedirect: "/auth/sign-up",
            failureFlash: true,
        }))
        .get("/login", (req, res) => {
            res.render("auth/login");
        })
        .post("/login", passport.authenticate("local-signin", {
            successRedirect: "/",
            failureRedirect: "/auth/login",
            failureFlash: true,
        }))
        .get("/user", (req, res) => {
            res.render("auth/user");
        })
        .post("/sign-out", (req, res) => {
            req.logout();
            return res.redirect("/");
        });

    app.use("/auth", router);
};

module.exports = { init };