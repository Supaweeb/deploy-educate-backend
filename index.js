require("dotenv").config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const database = require('./helpers/db')

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  await database.connect()
  const db = database.db("work")
  const collection = db.collection('person');
  console.log(await collection.findOne());
  res.send('test');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
