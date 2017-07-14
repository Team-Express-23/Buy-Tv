const app = require("./app/app");

const config = require('./config');

const db = require('./db').init(config.connectionString);

app.listen(config.port, function() {
    console.log("Server is running at http://localhost:" + config.port);
});