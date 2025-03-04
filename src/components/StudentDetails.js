import React, { useState, useEffect } from "react";
import { getStudentById } from "../services/studentService";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams(); 
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudentDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchStudentDetails = async () => {
    try {
      const response = await getStudentById(id);
      setStudent(response.data);
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

  if (!student) return <p>Loading...</p>;

  // Convert date fields to a human-readable format
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-info text-white">
        <h3 className="mb-0">Student Details</h3>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>Admission No</th>
              <td>{student.admissionNumber}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{student.firstName} {student.lastName}</td>
            </tr>
            <tr>
              <th>Roll Number</th>
              <td>{student.rollNumber}</td>
            </tr>
            <tr>
              <th>Class</th>
              <td>{student.class}</td>
            </tr>
            <tr>
              <th>Session</th>
              <td>{student.session}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{formatDate(student.dateOfBirth)}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{student.gender}</td>
            </tr>
            <tr>
              <th>Permanent Address</th>
              <td>{student.permanentAddress}</td>
            </tr>
            {student.correspondenceAddress && (
              <tr>
                <th>Correspondence Address</th>
                <td>{student.correspondenceAddress}</td>
              </tr>
            )}
            <tr>
              <th>Contact</th>
              <td>{student.contactNumber}</td>
            </tr>
            {student.alternateContactNumber && (
              <tr>
                <th>Alternate Contact</th>
                <td>{student.alternateContactNumber}</td>
              </tr>
            )}
            {student.email && (
              <tr>
                <th>Email</th>
                <td>{student.email}</td>
              </tr>
            )}
            <tr>
              <th>Nationality</th>
              <td>{student.nationality}</td>
            </tr>
            {student.religion && (
              <tr>
                <th>Religion</th>
                <td>{student.religion}</td>
              </tr>
            )}
            <tr>
              <th>Category</th>
              <td>{student.category}</td>
            </tr>
            <tr>
              <th>Date of Admission</th>
              <td>{formatDate(student.dateOfAdmission)}</td>
            </tr>
            {student.bloodGroup && (
              <tr>
                <th>Blood Group</th>
                <td>{student.bloodGroup}</td>
              </tr>
            )}
            <tr>
              <th>Father's Name</th>
              <td>{student.fatherName}</td>
            </tr>
            {student.fatherOccupation && (
              <tr>
                <th>Father's Occupation</th>
                <td>{student.fatherOccupation}</td>
              </tr>
            )}
            <tr>
              <th>Mother's Name</th>
              <td>{student.motherName}</td>
            </tr>
            {student.motherOccupation && (
              <tr>
                <th>Mother's Occupation</th>
                <td>{student.motherOccupation}</td>
              </tr>
            )}
            {student.aadhaarNumber && (
              <tr>
                <th>Aadhaar Number</th>
                <td>{student.aadhaarNumber}</td>
              </tr>
            )}
            <tr>
              <th>Student Photo</th>
              <td>
                <img
                  src={student.studentPhoto}
                  alt="Student"
                  width="120"
                  style={{ objectFit: "cover" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;
