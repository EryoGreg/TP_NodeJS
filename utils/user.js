const Models = require('../models/models.js')
const db = require('../models/db.js')
const bcrypt = require('bcrypt-nodejs')


function insertUser (login, password) {
    return new Promise((resolve,reject) => {
        Models.Users.create({
            Name: login,
            password: Hash(password),
            createdAt: Date.now(),
            updatedAt: Date.now()
        }).then(() => {
            resolve("INSERT DONE")
        })
    })
}

function getAllUsers () {
    return new Promise((resolve, reject) =>{
        db.query("SELECT * FROM `users`", { type: db.QueryTypes.SELECT}).then((users) => {
            resolve(users)
        })
    })
}


function deleteUserById(Id) {
    return new Promise((resolve,reject) => {
        Models.Users.destroy({
            where: {
                id: parseInt(Id)
            }
        }).then(() => {
            resolve("DELETE DONE")
        })
    })
}

function Hash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

module.exports = {insertUser, deleteUserById, getAllUsers}