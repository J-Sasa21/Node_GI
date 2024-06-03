const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

// Load employees from the JSON file
const filePath = path.join(__dirname, "employees.json");
let employees = [];

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the employees file:", err);
    return;
  }

  employees = JSON.parse(data);
});

// Endpoint to get all employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// Endpoint to get a specific employee by ID
app.get("/employees/:employeeID", (req, res) => {
  const employeeID = parseInt(req.params.employeeID, 10);
  const employee = employees.find((emp) => emp.employeeID === employeeID);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
