const express = require('express')

const database = require('./helpers/db')

const personRouter = require('./routers/personRouter')

const router = express.Router()

router.get('/', async (req, res) => {
    await database.connect()
    const db = database.db("work")
    const collection = db.collection('person');
    console.log(await collection.findOne());
    res.send('test');
});

router.use('/person', personRouter)

module.exports = router
