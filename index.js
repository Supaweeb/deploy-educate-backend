require("dotenv").config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routers = require('./routers')

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routers)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
