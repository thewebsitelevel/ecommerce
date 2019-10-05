const mongodb = require("mongodb");
const getDb = require('../util/database').getDb;


class User {
    constructor(username, email){
        this.name = name;
        this.email = email;
    }

    save(){
        const db = getDb;
        db
            .collection("users")
            .insertOne(this)
            .then(result => {
                console.log("user created !!!!");
            })
            .catch(err => {
                console.log(err);
            })
    }

    static findById(userId){
        const db = getDb;
        db
            .collection("users")
            .find({_id : new mongodb.ObjectId(userId)} )
            .then(user => {
                console.log(user);
            })
    }
}