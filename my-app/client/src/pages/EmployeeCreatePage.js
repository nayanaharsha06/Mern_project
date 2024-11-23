import React from "react";
import EmployeeForm from "../components/EmployeeForm";

function EmployeeCreatePage() {
  const handleSubmit = (employee) => {
    // Handle employee creation logic here
    fetch("/api/employees", {
      method: "POST",
      body: JSON.stringify(employee),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
}

export default EmployeeCreatePage;
