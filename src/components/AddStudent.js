import React, { useState } from "react";
import { addStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rollNumber: "",
    firstName: "",
    lastName: "",
    class: "",
    section: "",
    session: "",
    dateOfBirth: "",
    gender: "",
    permanentAddress: "",
    correspondenceAddress: "",
    contactNumber: "",
    alternateContactNumber: "",
    email: "",
    nationality: "",
    religion: "",
    category: "",
    dateOfAdmission: new Date().toISOString().split("T")[0],
    bloodGroup: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    studentPhoto: null,
    aadhaarNumber1: "",
    aadhaarNumber2: "",
    aadhaarNumber3: "",
  });

  const [sameAddress, setSameAddress] = useState(false);

  // Handle changes for text, select and date inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "sameAddress") {
      setSameAddress(checked);
      if (checked) {
        setFormData({ ...formData, correspondenceAddress: formData.permanentAddress });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      // If permanent address is changed and sameAddress is true, update correspondenceAddress too.
      if (name === "permanentAddress" && sameAddress) {
        setFormData((prev) => ({ ...prev, correspondenceAddress: value }));
      }
    }
  };

  // Handle file input change for the student photo
  const handleFileChange = (e) => {
    setFormData({ ...formData, studentPhoto: e.target.files[0] });
  };

  // Handle changes for Aadhaar number inputs
  const handleAadhaarChange = (index, value) => {
    // Allow only digits and limit input length to 4
    const sanitized = value.replace(/[^0-9]/g, "").slice(0, 4);
    if (index === 1) {
      setFormData({ ...formData, aadhaarNumber1: sanitized });
    } else if (index === 2) {
      setFormData({ ...formData, aadhaarNumber2: sanitized });
    } else if (index === 3) {
      setFormData({ ...formData, aadhaarNumber3: sanitized });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Combine Aadhaar parts into one string
    const completeAadhaar = `${formData.aadhaarNumber1} ${formData.aadhaarNumber2} ${formData.aadhaarNumber3}`;

    // Create FormData object for file upload along with other fields
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      // Skip the individual Aadhaar parts as we'll append complete string instead.
      if (!key.startsWith("aadhaarNumber")) {
        formDataObj.append(key, formData[key]);
      }
    });
    formDataObj.append("aadhaarNumber", completeAadhaar);

    try {
      await addStudent(formDataObj);
      alert("Student added successfully!");
      navigate("/students");
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student. Check console for details.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Add Student</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Personal Information Section */}
            <h5 className="mb-3">Personal Information</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label>Roll Number:</label>
                <input
                  type="number"
                  name="rollNumber"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label>Class:</label>
                <select
                  name="class"
                  className="form-control"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Class</option>
                  {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"].map((cls) => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label>Section (Optional):</label>
                <input
                  type="text"
                  name="section"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Session:</label>
                <input
                  type="text"
                  name="session"
                  placeholder="e.g., 2024-25"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Date of Birth:</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <label>Gender:</label>
                <select
                  name="gender"
                  className="form-control"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Contact Information Section */}
            <h5 className="mb-3">Contact Information</h5>
            <div className="mb-3">
              <label>Permanent Address:</label>
              <textarea
                name="permanentAddress"
                placeholder="Permanent Address"
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                name="sameAddress"
                className="form-check-input"
                checked={sameAddress}
                onChange={handleChange}
              />
              <label className="form-check-label">Same as Permanent Address</label>
            </div>
            <div className="mb-3">
              <label>Correspondence Address:</label>
              <textarea
                name="correspondenceAddress"
                placeholder="Correspondence Address"
                className="form-control"
                onChange={handleChange}
                disabled={sameAddress}
              />
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <label>Contact Number:</label>
                <input
                  type="text"
                  name="contactNumber"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label>Alternate Contact (Optional):</label>
                <input
                  type="text"
                  name="alternateContactNumber"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label>Email (Optional):</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Additional Details Section */}
            <h5 className="mb-3">Additional Details</h5>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label>Nationality:</label>
                <select
                  name="nationality"
                  className="form-control"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Nationality</option>
                  <option value="Indian">Indian</option>
                  <option value="American">American</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label>Religion (Optional):</label>
                <select
                  name="religion"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Select Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Christian">Christian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label>Category:</label>
                <select
                  name="category"
                  className="form-control"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="OBC">OBC</option>
                </select>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <label>Date of Admission:</label>
                <input
                  type="date"
                  name="dateOfAdmission"
                  className="form-control"
                  value={formData.dateOfAdmission}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Blood Group (Optional):</label>
                <select
                  name="bloodGroup"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="">Select Blood Group</option>
                  {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Parent Information Section */}
            <h5 className="mb-3">Parent Information</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Father's Name:</label>
                <input
                  type="text"
                  name="fatherName"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Father's Occupation (Optional):</label>
                <input
                  type="text"
                  name="fatherOccupation"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <label>Mother's Name:</label>
                <input
                  type="text"
                  name="motherName"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Mother's Occupation (Optional):</label>
                <input
                  type="text"
                  name="motherOccupation"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Aadhaar and Photo Section */}
            <h5 className="mb-3">Aadhaar & Photo</h5>
            <div className="row mb-3">
              <div className="col-md-4 d-flex align-items-center">
                <label className="mb-0">Aadhaar Number:</label>
              </div>
              <div className="col-md-8 d-flex">
                <input
                  type="text"
                  name="aadhaarNumber1"
                  maxLength="4"
                  placeholder="XXXX"
                  className="form-control mx-1"
                  value={formData.aadhaarNumber1}
                  onChange={(e) => handleAadhaarChange(1, e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="aadhaarNumber2"
                  maxLength="4"
                  placeholder="XXXX"
                  className="form-control mx-1"
                  value={formData.aadhaarNumber2}
                  onChange={(e) => handleAadhaarChange(2, e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="aadhaarNumber3"
                  maxLength="4"
                  placeholder="XXXX"
                  className="form-control mx-1"
                  value={formData.aadhaarNumber3}
                  onChange={(e) => handleAadhaarChange(3, e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label>Upload Student Photo:</label>
              <input
                type="file"
                name="studentPhoto"
                accept="image/*"
                className="form-control"
                onChange={handleFileChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-success mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
