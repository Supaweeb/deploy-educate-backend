const express = require('express')

const router = express.Router()

router.get('/confirm',
  (req, res, next) => {
    req.response = {
      res_code: '0000',
      res_desc: 'test'
    }
    res.json(req.response)
    next()
  }
)

module.exports = router
