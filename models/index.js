const sequelize = require ('../dbConnection')
const users = require ('../models/definitions/users')

const models = {users}

const db = {}

db.sequelize = sequelize

sequelize.models= models

module.exports= {db, models}