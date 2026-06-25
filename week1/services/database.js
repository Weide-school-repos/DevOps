const { MongoClient } = require("mongodb");

require('dotenv').config();


const url = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || 'default_db';


const client = new MongoClient(url);



const db = client.db(dbName); 

module.exports = {

    db,
    client,
    dbName

};