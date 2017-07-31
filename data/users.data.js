"use strict";
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
                } else if (user.password !== password) {
                    throw new Error("Invalid password");
                } else {
                    return user;
                }
            });
    }

    findById(id) {
        return this.collection.findOne({ _id: new ObjectID(id) });
    }

    createUser(userObject) {
        return this.findByUsername(userObject.username)
            .then((dbUser) => {
                if (dbUser) {
                    throw new Error("User already exists");
                }

                const newUser = {
                    username: userObject.username,
                    email: userObject.email,
                    password: userObject.password,
                };

                return this.collection.insert(newUser)
                    .then((result) => {
                        return result.ops[0];
                    });
            });
    }
}

module.exports = UsersData;