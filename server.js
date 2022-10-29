require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/we-review/reviews', require('./controllers/reviewController.js'))
app.use('/we-review/users', require('./controllers/userController.js'))

app.listen(3000, () => {
    console.log('Listening...')
})
