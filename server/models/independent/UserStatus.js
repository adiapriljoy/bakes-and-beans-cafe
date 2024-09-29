module.exports = (sequelize, DataTypes) => {
  const UserStatus = sequelize.define(
    "UserStatus",
    {
      user_status_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_status_desc: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      tableName: "bb_user_status",
      timestamps: false,
    }
  );

  UserStatus.associate = function(models) {
    UserStatus.hasMany(models.User, {
      foreignKey: 'user_status_id',
      as: 'users'
    });
  };

  return UserStatus;
};
