//CONST
const express = require('express')
const session = require('express-session')
const todo = require('../utils/todo.js')
const user = require('../utils/user.js')
const login = require('../utils/login.js')
const router = express.Router();



//GET
router.get('/', (req, res, next) => {
	res.render('login')
})
router.get('/disconnect', (req, res, next) => {
	req.session.username = ""
	res.redirect('/login')
})

router.get('/register', (req, res, next) => {
    res.render('user/edit')
})



//POST
router.post('/', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    login.loginOK(username, password).then((result) => {
        
    	req.session.username = result.username
    	req.session.userID = result.id
        res.redirect('/todos')
        
    }).catch(function(e) {

      res.redirect('/login')
    })
})


router.use((req, res) => {
    res.redirect('/login')
})
module.exports = router