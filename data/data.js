"use strict";
const ItemsData = require("./items.data"),
    UsersData = require("./users.data"),
    init = (db) => {
        return Promise.resolve({
            items: new ItemsData(db),
            users: new UsersData(db),
        });
    };

module.exports = { init };