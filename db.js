const { MongoClient, ObjectId } = require("mongodb");
 
let singleton;
 
async function connect() {
    if (singleton) return singleton;
 
    const client = new MongoClient(process.env.MONGO_HOST);
    await client.connect();
 
    singleton = client.db(process.env.MONGO_DATABASE);
    return singleton;
}

const COLLECTION = "clientes";
 
async function findAll() {
    const db = await connect();
    return db.collection(COLLECTION).find().toArray();
}
 
module.exports = { findAll }