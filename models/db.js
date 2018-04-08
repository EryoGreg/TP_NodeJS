const Sequelize = require('sequelize')
const db = new Sequelize('todolist', 'Toor', '****', {
  host: 'localhost',
  dialect: 'mysql',
  port: 8888,
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

db
  .authenticate()
  .then(() => {

  })
  .catch(err => {
    console.error("Impossible de se connecter à la bdd", err);
  });

module.exports = db
