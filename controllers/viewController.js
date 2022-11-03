const RESOURCE_PATH = '/reviews'

const viewController = {
    index (req, res, next) {
        res.render('reviews/IndexReviews', res.locals.data)
    },
}

module.exports = viewController
