module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    Phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Role: {
      type: DataTypes.INTEGER,
    },
    Password: {
      type: DataTypes.STRING,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
