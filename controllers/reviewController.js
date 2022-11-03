const express = require('express')
const router = express.Router()
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')

// Index
router.get('/', dataController.index, viewController.index)

module.exports = router