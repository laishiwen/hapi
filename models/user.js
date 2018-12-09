module.exports = (sequelize, DataTypes) => sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usernick: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true, // Model 对应的表名将与model名相同
    timestamps: false
});