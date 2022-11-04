const express = require('express')
const router = express.Router()
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')

// I
router.get('/', dataController.indexReviews, viewController.indexReviews)

// N

// D

// U

// C

// E

// S
router.get('/:id', dataController.showReview, viewController.showReview)

module.exports = router
