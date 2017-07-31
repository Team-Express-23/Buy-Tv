"use strict";
class ItemsData {
    constructor(db) {
        this.items = db.collection("items");
    }

    getAllItems() {
        return this.items.find({}).toArray();
    }
}

module.exports = ItemsData;