const port = 3000,
    async = () => {
        return Promise.resolve();
    };

async()
.then(() => require("./db/db").init())
    .then((db) => require("./data/data").init(db))
    .then((data) => require("./app/app").init(data))
    .then((app) => {
        app.listen(port
            // , () => console.log(`Listening at :${port}`)
        );
    });