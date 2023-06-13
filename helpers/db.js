require("dotenv").config();

const { MongoClient } = require('mongodb');

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@educate.fzodpu4.mongodb.net/${process.env.DB_SCHEMA}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

let db = null;

async function connect() {
  if (db) {
    return db;
  }

  try {
    const client = await MongoClient.connect(url, options);
    db = await client.db();
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = {
  connect,
};
