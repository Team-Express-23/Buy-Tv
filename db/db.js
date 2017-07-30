const { MongoClient } = require("mongodb"),
    init = (connectionString) => {
        return MongoClient.connect(connectionString);
    };

module.exports = { init };