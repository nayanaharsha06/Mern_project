const Employee = require("../models/Employee");

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.createEmployee = async (req, res) => {
  const { name, position } = req.body;
  const newEmployee = new Employee({ name, position });
  await newEmployee.save();
  res.status(201).json(newEmployee);
};
