const config = require("./app/configs/mongoDB.connection.config"),
    async = () => {
        return Promise.resolve();
    };

async()
.then(() => require("./db/db").init(config.connectionString))
    .then((db) => require("./data/data").init(db))
    .then((data) => require("./app/app").init(data))
    .then((app) => {
        app.listen(config.port
            // , () => console.log(`Listening at :${config.port}`)
        );
    });