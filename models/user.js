const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  reviews: { type: Array, required: true, default: []}
})

const User = model('User, userSchema')

module.exports = User
