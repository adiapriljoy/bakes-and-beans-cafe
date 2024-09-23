module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      user_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_user_status",
          key: "user_status_id",
        },
      },
      emp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_employee",
          key: "emp_id",
        },
      },
      last_modified: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      initialAutoIncrement: 100,
      timestamps: false,
      tableName: "bb_users",
    }
  );

  User.associate = function (models) {
    User.belongsTo(models.UserStatus, {
      foreignKey: "user_status_id",
      as: "userStatus",
    });
    User.belongsTo(models.Employee, {
      foreignKey: "emp_id",
      as: "employee",
    });
    User.hasOne(models.UserSession, {
      foreignKey: "user_id",
      as: "userSession",
    });
  };

  return User;
};
