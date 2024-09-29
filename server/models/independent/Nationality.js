module.exports = (sequelize, DataTypes) => {
  const Nationality = sequelize.define(
    "Nationality",
    {
      nationality_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nationality_desc: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      tableName: "bb_nationality",
      timestamps: false,
    }
  );

  Nationality.associate = function (models) {
    Nationality.hasMany(models.Employee, {
      foreignKey: "nationality_id",
      as: "employee",
    });
  };

  return Nationality;
};
