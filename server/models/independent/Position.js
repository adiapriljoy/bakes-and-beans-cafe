module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define(
    "Position",
    {
      position_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      position_desc: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      tableName: "bb_position",
      timestamps: false,
    }
  );

  Position.associate = function (models) {
    Position.hasMany(models.Employee, {
      foreignKey: "position_id",
      as: "employee",
    });
  };

  return Position;
};
