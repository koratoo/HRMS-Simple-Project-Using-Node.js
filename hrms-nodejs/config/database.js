const { Sequelize } = require("sequelize");

// PostgreSQL 연결 설정
const sequelize = new Sequelize("postgres", "postgres", "1234", {
  host: "127.0.0.1",
  dialect: "postgres",
  define: {
    schema: "hrms",
  },
});

module.exports = sequelize;
