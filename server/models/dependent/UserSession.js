module.exports = (sequelize, DataTypes) => {
  const UserSession = sequelize.define(
    "UserSession",
    {
      session_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_users",
          key: "user_id",
        },
      },
      date_created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      date_expired: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      access_token: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      refresh_token: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "bb_users_session",
      timestamps: false,
    }
  );

  UserSession.associate = function (models) {
    UserSession.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };

  return UserSession;
};
