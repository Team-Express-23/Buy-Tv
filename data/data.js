const init = (db) => {
    return db.collection("items").find({}).toArray();
};

module.exports = { init };