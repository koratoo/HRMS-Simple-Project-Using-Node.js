const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Employee = sequelize.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "id", // PostgreSQL의 실제 컬럼 이름
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name",
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "age",
    },
    position: {
      type: DataTypes.STRING,
      field: "position",
    },
    department: {
      type: DataTypes.STRING,
      field: "department",
    },
  },
  {
    tableName: "employees",
    schema: "hrms",
    timestamps: false,
  }
);

module.exports = Employee;
