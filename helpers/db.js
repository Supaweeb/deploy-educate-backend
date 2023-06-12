require("dotenv").config();

const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@educate.fzodpu4.mongodb.net/${process.env.DB_SCHEMA}`;
const client = new MongoClient(uri);

client.connect()
    .then(async () => {
        // console.log(test)
        const db = client.db(process.env.DB_SCHEMA);
        // const collection = db.collection('person');
        // const first = await collection.findOne();
        // console.log(db);
        // client.close();

        return db
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(async () => {
        await client.close();
    })

module.exports = client
