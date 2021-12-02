module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define("session", {
    User_ID: {
      type: DataTypes.INTEGER,
    },
    Created_On: {
      type: DataTypes.DATE,
    },
    Shift_Duration: {
      type: DataTypes.TIME,
    },
  });

  return Session;
};
