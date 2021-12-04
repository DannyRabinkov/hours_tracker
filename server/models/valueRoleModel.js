module.exports = (sequelize, DataTypes) => {
  const ValueRole = sequelize.define("valuesRole", {
    Role: {
      type: DataTypes.INTEGER,
    },
    Value: {
      type: DataTypes.STRING,
    },
  });

  return ValueRole;
};
