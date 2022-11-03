const Review = require('../models/review')

const dataController = {
    index (req, res, next) {
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
}

module.exports = dataController
