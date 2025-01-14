'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Task, {
        foreignKey: "categoryId",
      })
      // Category.belongsToMany(models.User, {
      //   through: models.Task,
      //   foreignKey: "categoryId",
      // })
    }
  };
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Category name must be filled"
      },
      validate: {
        notEmpty: {
          args: true,
          msg: "Category name must be filled"
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};