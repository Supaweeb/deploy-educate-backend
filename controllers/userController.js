const { connect } = require('../helpers/db');

async function authenUser (username, password) {
    try {
        const db = await connect();
        const collection = db.collection('users');
        const user = await collection.findOne({
            username,
            password
        });
        return user
    } catch (error) {
        return error
    }
}

const login = () => async (req, res, next) => {
    const { username, password } = req.body

    authenUser(username, password).then((user) => {
        if (user) {
            req.user = user
        } else {
            throw 'User not found'
        }
        next()
    }).catch((err) => {
        console.log(err)
        next(err)
    })
}

module.exports = {
    authenUser,
    login
};
