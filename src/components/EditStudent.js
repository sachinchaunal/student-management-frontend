import React, { useState, useEffect } from "react";
import { getStudentById, updateStudent } from "../services/studentService";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams(); // Get student ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rollNumber: "",
    class: "",
    session: "",
    dateOfBirth: "",
    gender: "",
    permanentAddress: "",
    contactNumber: "",
    nationality: "",
    category: "",
    fatherName: "",
    motherName: "",
  });

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const fetchStudentDetails = async () => {
    try {
      const response = await getStudentById(id);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(id, formData);
      navigate("/students"); // Redirect to student list
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div>
      <h3>Edit Student</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control mb-2" required />
        <input type="number" name="rollNumber" value={formData.rollNumber} onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="class" value={formData.class} onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="session" value={formData.session} onChange={handleChange} className="form-control mb-2" required />
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="category" value={formData.category} onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} className="form-control mb-2" required />
        <button type="submit" className="btn btn-warning">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
