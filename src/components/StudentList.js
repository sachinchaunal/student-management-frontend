import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/studentService";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await deleteStudent(id);
      fetchStudents();
    }
  };

  return (
    <div>
      <h3>Student List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Admission No</th>
            <th>Name</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.admissionNumber}</td>
              <td>{student.firstName} {student.lastName}</td>
              <td>{student.class}</td>
              <td>
                <Link to={`/students/${student._id}`} className="btn btn-info btn-sm m-1">View</Link>
                <Link to={`/edit-student/${student._id}`} className="btn btn-warning btn-sm m-1">Edit</Link>
                <button onClick={() => handleDelete(student._id)} className="btn btn-danger btn-sm m-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
