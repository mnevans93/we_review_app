const express = require('express')
const router = express.Router()
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')
const authController = require('./authController.js')

router.use((req, res, next) => {
    if (req.session.loggedIn) {
      next()
    } else {
      res.redirect('/user/login')
    }
})

// I


// N


// D


// U


// C


// E


// S


module.exports = router