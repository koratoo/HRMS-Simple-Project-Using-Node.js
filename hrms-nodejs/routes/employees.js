const express = require("express");
const Employee = require("../models/employee");
const router = express.Router();

/**
 * @route GET /employees
 * @description Get all employees
 */
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.findAll();
    console.log("Employees retrieved from DB:", employees); // 디버깅용 로그
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @route POST /employees
 * @description Add a new employee
 */
router.post("/", async (req, res) => {
  try {
    const { name, age, position, department } = req.body;
    const newEmployee = await Employee.create({
      name,
      age,
      position,
      department,
    });
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @route PUT /employees/:id
 * @description Update an employee
 */
router.put("/:id", async (req, res) => {
  try {
    const { name, age, position, department } = req.body;
    const employee = await Employee.findByPk(req.params.id);

    if (employee) {
      employee.name = name;
      employee.age = age;
      employee.position = position;
      employee.department = department;
      await employee.save();
      res.json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @route DELETE /employees/:id
 * @description Delete an employee
 */
router.delete("/:id", async (req, res) => {
  try {
    const rowsDeleted = await Employee.destroy({
      where: { id: req.params.id },
    });
    if (rowsDeleted) {
      res.json({ message: "Employee deleted successfully" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
