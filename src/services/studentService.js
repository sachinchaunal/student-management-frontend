import axios from "axios";

const API_URL = "https://student-management-backend-63m9.onrender.com";

// Get all students
export const getStudents = async () => {
  return await axios.get(API_URL);
};

// Get student by ID
export const getStudentById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// Add a new student
export const addStudent = async (studentData) => {
  return await axios.post(API_URL, studentData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// Update student details
export const updateStudent = async (id, studentData) => {
  return await axios.put(`${API_URL}/${id}`, studentData);
};

// Delete student
export const deleteStudent = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
