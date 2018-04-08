const express = require('express')
const user = require('../utils/user.js')
const todo = require('../utils/todo.js')
const session = require('express-session')

const router = express.Router();

router.post('/', (req, res, next) => {

    var username = req.body.username
    var password = req.body.password
    user.insertUser(username, password).then((result) => {

        user.getAllUsers().then((result) => {

            res.redirect('/login')

        })
    })
})

router.get('/register', (req, res, next) => {

    res.render('user/edit')
})

module.exports = router