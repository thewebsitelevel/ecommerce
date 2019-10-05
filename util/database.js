const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = () => {
  MongoClient.connect("mongodb+srv://itskumarravinder:Rk258469@cluster0-ujbzg.mongodb.net/shop?retryWrites=true&w=majority", { useNewUrlParser: true }  )
  .then(client => {
    console.log("connected!!!!!!!!!");
    _db = client.db();
  })
  .catch(err => {
    console.log(err);
  })
}

const getDb = () => {
  if(_db){
    return _db;
  }else{
    throw "Database not connected";
  }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;


