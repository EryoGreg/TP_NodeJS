const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 8080
const todo = require('./controller/todo.js');
const user = require('./controller/user.js');
const login = require('./controller/login.js');
var i = 1


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views')
app.set('view engine', 'pug')
app.use(methodOverride('_method'))
app.use(session({ secret_cookie: 'Eat Me Pls', cookie: { maxAge: 10000 }}));
app.use('/login', login)
app.use('/users', user)
app.use('/', todo)

app.all('*', (req, res, next) => {
    if(i == 1){
        req.session.username = ""
        i = 0
    }
    next()
})



app.listen(PORT, () => {
    console.log('Serveur sur port:', PORT)
})