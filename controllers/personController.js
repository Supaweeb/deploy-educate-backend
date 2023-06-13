const { connect } = require('../helpers/db');

exports.findPerson = () => async (req, res, next) => {
    try {
        const db = await connect();
        const collection = db.collection('person');
        console.log(collection)
        req.persons = await collection.find();
    } catch (error) {
        console.error('Error finding users:', error);
        throw error;
    }
    // await client.connect()
    // const db = client.db("work")
    // const collection = db.collection('person');
    // req.persons = await collection.findOne();
    next();
}
