const Review = require('../models/review')

const dataController = {
    // I
    indexReviews (req, res, next) {
        Review.find({}, (err, foundReviews) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.reviews = foundReviews
                next()
            }
        }
    )},
    // N

    // D

    // U

    // C

    // E

    // S
    showReview (req, res, next) {
        Review.findById(req.params.id, (err, foundReview) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                    output: `Sorry! We couldn't find that review.`
                })
            } else {
                res.locals.data.review = foundReview
                next()
            }
        })
    }
}

module.exports = dataController
