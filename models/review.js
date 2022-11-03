const mongoose = require('mongoose')

const { Schema, model } = mongoose

const reviewSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    subject: { type: String, required: true },
    content: { type: String, required: true },
    // rating: { type: Number, required: true },
    // likes: { type: Number, default: 0 },
    // dislikes: { type: Number, default: 0 },
    // datePosted: { type: String, default: '' },
    // lastEditDate: { type: String, default: '' }
})

const Review = model('Review', reviewSchema)

module.exports = Review
