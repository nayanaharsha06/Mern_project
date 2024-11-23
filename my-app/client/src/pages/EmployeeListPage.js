import React, { useState, useEffect } from "react";
import EmployeeList from "../components/EmployeeList";

function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from API
    fetch("/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return <EmployeeList employees={employees} />;
}

export default EmployeeListPage;
