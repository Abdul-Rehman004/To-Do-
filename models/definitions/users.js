const {DataTypes, Model} = require('sequelize')

const sequelize = require('../../dbConnection')

class users extends Model {}

    users.init({
userId:{
    primaryKey: true,
    type: DataTypes.STRING(60)
},
title:{
 
    type: DataTypes.STRING(60),
    unique:true,
    allowNull:false
},
description:{
  
    type: DataTypes.STRING(60),
    allowNull:false

},
enum:{

    type: DataTypes.STRING(60),
    unique:true,
    allowNull:false
},
    },{
        sequelize,
        name: 'users',
        timestamps: true,
        paranoid:true,

    })


module.exports= users