class UserController {
    constructor(data) {
        this.data = data;
    }

    getSignUpForm(req, res) {
        return res.render("auth/sign-up");
    }

    loginForm(req, res) {
        return res.render("auth/login");
    }

    getUserProfile(req, res) {
        return res.render("auth/user");
    }

    signOut(req, res) {
        req.logout();
        return res.redirect("/");
    }
}

const init = (data) => {
    return new UserController(data);
};

module.exports = { init };