class ItemsController {
    constructor(data) {
        this.data = data;
    }

    productsPage(req, res) {
        return this.data.items.getAllItems()
            .then((result) => {
                res.render("products", {
                    array: result
                });
            });
    }
}

const init = (data) => {
    return new ItemsController(data);
};

module.exports = { init };