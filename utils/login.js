const Models = require('../models/models.js')
const db = require('../models/db.js')
const bcrypt = require('bcrypt-nodejs')


function getAllUsers () {
    return new Promise((resolve, reject) =>{
        db.query("SELECT * FROM `users`", { type: db.QueryTypes.SELECT}).then((users) => {
            resolve(users)
        })
    })
}

function loginOK(username, password) {
	USER = {}//array
	return new Promise((resolve, reject) => {
		getAllUsers().then((result) => {
			USER = result
			USER.forEach(function(element){
				if(element.Name == username && NoErrorPassword(password, element.password)){
					resolve({'username': element.Name, 'id': element.id})
				}
			})
			reject()
		})
	})
}


function NoErrorPassword(passwordUser, passwordDB) {
    return bcrypt.compareSync(passwordUser, passwordDB)
}

module.exports = {loginOK}