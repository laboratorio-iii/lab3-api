'use strict'

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
          },
        rol: {
            type: DataTypes.INTEGER,
            allowNull: false
          },  
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: DataTypes.STRING,
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        modelName: 'user',
        sequelize
    })
  
    User.associate = function (models) {
      
    }
  
    return User
}