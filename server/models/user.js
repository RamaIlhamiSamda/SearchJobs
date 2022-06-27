const {encryptPassword} = require('../helpers/bcrypt')

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  user.init({
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:function(user,option){
        user.password = encryptPassword(user.password)
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};