"use strict";
const connectionString = "mongodb://localhost/items-db",
    { MongoClient } = require("mongodb"),
    init = () => {
        return MongoClient.connect(connectionString);
    };

module.exports = { init };