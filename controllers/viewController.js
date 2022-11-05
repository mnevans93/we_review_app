const RESOURCE_PATH = '/we-review/reviews'

const viewController = {
    indexReviews (req, res, next) {
        res.render('reviews/IndexReviews', res.locals.data)
    },
    redirectReviewIndex (req, res, next) {
        res.redirect(RESOURCE_PATH)
    },
    newReview (req, res, next) {
        res.render('reviews/NewReview')
    },
    editReview (req, res, next) {
        res.render('reviews/EditReview', res.locals.data)
    },
    showReview (req, res, next) {
        res.render('reviews/ShowReview', res.locals.data)
    },
    redirectReviewShow (req, res, next) {
        res.redirect(`${RESOURCE_PATH}/${res.locals.data.review._id}`)
    },
    
}

module.exports = viewController
