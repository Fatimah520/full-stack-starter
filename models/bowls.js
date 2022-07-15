'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bowls extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bowls.init(
    {
      Title: DataTypes.STRING,
      Subtitle: DataTypes.STRING,
      Tagline: DataTypes.STRING,
      Image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'bowls',
    }
  );
  return bowls;
};
