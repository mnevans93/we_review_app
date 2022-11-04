const RESOURCE_PATH = '/reviews'

const viewController = {
    indexReviews (req, res, next) {
        res.render('reviews/IndexReviews', res.locals.data)
    },
    editReview (req, res, next) {
        res.render('reviews/EditReview', res.locals.data)
    },
    showReview (req, res, next) {
        res.render('reviews/ShowReview', res.locals.data)
    },
}

module.exports = viewController
