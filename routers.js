const express = require('express')

const { connect } = require('./helpers/db');

const personRouter = require('./routers/personRouter')
const userRouter = require('./routers/userRouter')

const router = express.Router()

router.get('/', async (req, res) => {
    const db = await connect();
    const collection = db.collection('person');
    console.log(await collection.findOne());
    res.send('test');
});

router.use('/person', personRouter)
router.use('/user', userRouter)

module.exports = router
