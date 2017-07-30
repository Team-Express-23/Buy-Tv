const { ObjectID } = require("mongodb");

class UsersData {
    constructor(db) {
        this.collection = db.collection("users");
    }

    findByUsername(username) {
        return this.collection.findOne({ username });
    }

    checkPassword(username, password) {
        return this.findByUsername(username)
            .then((user) => {
                if (!user) {
                    throw new Error("Invalid user");
                }

                if (user.password !== password) {
                    throw new Error("Invalid password");
                }
                return user;
            });
    }

    findById(id) {
        return this.collection.findOne({
            _id: new ObjectID(id),
        });
    }

    createUser(bodyUser) {
        return this.findByUsername(bodyUser.username)
            .then((dbUser) => {
                if (dbUser) {
                    throw new Error("User already exists");
                }

                return new Promise((resolve) => {
                    const newUser = {
                        name: bodyUser.name,
                        username: bodyUser.username,
                        email: bodyUser.email,
                        password: bodyUser.password,
                    };

                    resolve(newUser);
                });
            })
            .then((newUser) => {
                return this.collection.insert(newUser)
                    .then((result) => {
                        return result.ops[0];
                    });
            });
    }
}

module.exports = UsersData;