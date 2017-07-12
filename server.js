const app = require("./app/app"),
    port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Server is running at http://localhost:" + port);
});