module.exports = (sequelize, DataTypes) => {
    const UserRole = sequelize.define(
      "UserRole",
      {
        user_role_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_role_desc: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
      },
      {
        tableName: "bb_user_role",
        timestamps: false,
      }
    );
  
    UserRole.associate = function(models) {
      UserRole.hasMany(models.User, {
        foreignKey: 'user_role_id',
        as: 'users'
      });
    };
  
    return UserRole;
  };
  