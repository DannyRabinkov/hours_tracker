module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define("session", {
    User_ID: {
      type: DataTypes.INTEGER,
    },
    Shift_Duration: {
      type: DataTypes.STRING,
    },
  });

  return Session;
};
