'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.hasMany(models.Favourite, {foreignKey: 'RecipeId'})
    }
  };
  Recipe.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    info: DataTypes.TEXT,
    ingredients: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};