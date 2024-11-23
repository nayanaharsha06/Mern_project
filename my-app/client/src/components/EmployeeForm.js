import React, { useState } from "react";

function EmployeeForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, position });
    setName("");
    setPosition("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
