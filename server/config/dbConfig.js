module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "employee_track",
  dialect: "mysql",

  pool: {
    max: 15,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
