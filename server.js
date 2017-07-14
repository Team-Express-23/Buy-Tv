const app = require("./app/app");

const config = require('./config');

app.listen(config.port, function() {
    console.log("Server is running at http://localhost:" + config.port);
});