module.exports = (sequelize, DataTypes) => {
  const ValueRole = sequelize.define("value_Role", {
    ID: {
      type: DataTypes.INTEGER,
    },
    Value: {
      type: DataTypes.STRING,
    },
  });

  return ValueRole;
};
