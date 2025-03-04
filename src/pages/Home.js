import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <h1 className="mb-4">Student Management System</h1>
      <p className="lead">Welcome to the Student Management System</p>
      <div>
        <Link to="/students" className="btn btn-primary mx-2">
          View Students
        </Link>
        <Link to="/add-student" className="btn btn-success mx-2">
          Add Student
        </Link>
      </div>
    </div>
  );
};

export default Home;
