const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController')

router.post('/login',
    userController.login(),
    (req, res, next) => {
    req.response = {
      res_code: '0000',
      res_desc: 'Authen',
      data: req.user
    }
    res.json(req.response)
    next()
  }
)

module.exports = router
