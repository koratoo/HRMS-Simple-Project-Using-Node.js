const { Sequelize } = require("sequelize");

// PostgreSQL 연결 설정
const sequelize = new Sequelize("postgres", "postgres", "1234", {
  host: "127.0.0.1",
  dialect: "postgres",
  define: {
    schema: "hrms", // 모든 테이블에 기본 스키마 설정
  },
});

module.exports = sequelize;
