const express = require('express')
const router = express.Router()
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')

// I
router.get('/', dataController.indexReviews, viewController.indexReviews)

// N

// D
router.delete('/:id', dataController.deleteReview, viewController.redirectReviewIndex)

// U
router.put('/:id', dataController.updateReview, viewController.redirectReviewShow)

// C

// E
router.get('/:id/edit', dataController.showOrEditReview, viewController.editReview)

// S
router.get('/:id', dataController.showOrEditReview, viewController.showReview)

module.exports = router
