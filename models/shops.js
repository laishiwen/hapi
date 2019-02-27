module.exports = (sequelize, DataTypes) => sequelize.define(
  'shops', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thumb_url: DataTypes.INTEGER
  }, {
    tableName: 'shops'
  }
)