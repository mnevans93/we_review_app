const Review = require('../models/review')

const checkForError = (err) => {
    if (err) {
        res.status(400).send({msg: err.message})
        return true
    } else {return false}
}

const dataController = {
    // I
    indexReviews (req, res, next) {
        Review.find({}, (err, foundReviews) => {
            if (checkForError(err) === false) {
                res.locals.data.reviews = foundReviews
                next()
            }
        }
    )},
    // N - doesn't connect to DB

    // D
    deleteReview (req, res, next) {
        Review.findByIdAndDelete(req.params.id, (err, deletedReview) => {
            if (checkForError(err) === false) {
                res.locals.data.review = deletedReview
                next()
            }
        })
    },
    // U
    updateReview (req, res, next) {
        Review.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedReview) => {
            if (checkForError(err) === false) {
                res.locals.data.review = updatedReview
                next()
            }
        })
    },
    // C
    createReview (req, res, next) {
        Review.create(req.body, (err, createdReview) => {
            if (checkForError(err) === false) {
                res.locals.data.review = createdReview
                next()
            }
        })
    },
    // E, S
    showOrEditReview (req, res, next) {
        Review.findById(req.params.id, (err, foundReview) => {
            if (checkForError(err) === false) {
                res.locals.data.review = foundReview
                next()
            }
        })
    }
}

module.exports = dataController
