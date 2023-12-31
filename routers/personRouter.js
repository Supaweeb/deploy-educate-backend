const express = require('express')

const router = express.Router()

const personController = require('../controllers/personController')

router.get('/confirm',
    personController.findPerson(),
    (req, res, next) => {
    req.response = {
      res_code: '0000',
      res_desc: 'test',
      data: req.persons
    }
    res.json(req.response)
    next()
  }
)

module.exports = router
