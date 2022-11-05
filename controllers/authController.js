const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('account/SignUp.jsx')
})

router.post('/signup', async (req, res) => {
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )
    User.create(req.body)
        .then ((user) => {
            res.redirect('/we-review/account/login')
        })
        .catch ((error) => {
            console.log(error)
            res.json({ error })
        })
})

router.get('/login', (req, res) => {
    res.render('account/Login.jsx')
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    User.findOne({ username })
      .then(async (user) => {
        if (user) {
          const result = await bcrypt.compare(password, user.password)
          if (result) {
            req.session.username = username
            req.session.loggedIn = true
            res.redirect('/we-review/reviews')
          } else {
            res.json({ error: "Sorry, that password doesn't match!" })
          }
        } else {
          res.json({ error: "Sorry, we couldn't find that username!" })
        }
      })
      .catch((error) => {
        console.log(error)
        res.json({ error })
      })
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error(err)
        res.status(500).json(err)
      } else {
        res.redirect('/we-review/reviews')
      }
    })
})

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('account/UserInfo.jsx')
    } else {
        res.render('account/Login.jsx')
    }
})

module.exports = router
