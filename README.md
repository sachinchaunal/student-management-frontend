# Student Management System (MERN Stack)

## 🚀 Overview

This is a **Student Management System** built using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**. It allows users to add, edit, view, and manage student records efficiently. The frontend is deployed on **Vercel**, while the backend is deployed on **Render**.
## Project Preview

<table>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (285).png" alt="Admin" width="800" height="400"></td>
  </tr>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (286).png" alt="Admin" width="800" height="400"></td>
  </tr>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (287).png" alt="Landing" width="800" height="400"></td>
  </tr>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (288).png" alt="Admin" width="800" height="400"></td>
  </tr>
   <tr>
    <td colspan="3"><img src="/screenshot/Screenshot (289).png" alt="Admin" width="800" height="400"></td>
  </tr>
 
</table>
## 📂 Project Structure

The project consists of two repositories:

- **Frontend**: [student-management-frontend](https://github.com/sachinchaunal/student-management-frontend)
- **Backend**: [student-management-backend](https://github.com/sachinchaunal/student-management-backend)

---

## 🛠️ Setup Instructions

### 🔹 Prerequisites

Ensure you have the following installed:

- **Node.js** (v16+ recommended)
- **MongoDB** (Locally or MongoDB Atlas)
- **Git**
  

### **1️⃣ Clone the Repositories**

```sh
# Clone frontend repo
git clone https://github.com/sachinchaunal/student-management-frontend.git

# Clone backend repo
git clone https://github.com/sachinchaunal/student-management-backend.git
```

---

## 🖥 Backend Setup

### **2️⃣ Install Backend Dependencies**

```sh
cd student-management-backend
npm install
```

### **3️⃣ Configure Environment Variables**

Create a `.env` file in the **backend root folder** and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=


```

### **4️⃣ Run Backend Locally**

```sh
npx nodemon server.js
```

Your backend will run at `http://localhost:5000`

### **5️⃣ Deploy Backend to Render**

1. Go to [**Render**](https://render.com/) and create a new **Web Service**.
2. Connect the backend **GitHub repository**.
3. Set the **Build Command**: `npm install`
4. Set the **Start Command**: `npm start`
5. Add **Environment Variables** (same as `.env`)
6. Deploy 🚀

---

## 🎨 Frontend Setup

### **6️⃣ Install Frontend Dependencies**

```sh
cd student-management-frontend
npm install
```

### **7️⃣ Configure API Endpoint**

Update the `BASE_URL` inside the frontend API requests to point to your deployed backend:

```js
const BASE_URL = "https://student-management-backend-xxxxx.onrender.com"; // Replace with your backend URL and if you are running this code locally then paste your backend url containing the port at which the server will run
```

### **8️⃣ Run Frontend Locally**

```sh
npm start
```

Your frontend will run at `http://localhost:3000`

### **9️⃣ Deploy Frontend to Vercel**

1. Go to [**Vercel**](https://vercel.com/) and create a new project.
2. Connect the frontend **GitHub repository**.
3. Set the **Build Command**: `npm install && npm run build`
4. Set the **Output Directory**: `build`
5. Deploy 🚀

---

## 🔗 Live Demo

- **Frontend**: [View on Vercel](https://student-management-system-ten-plum.vercel.app)
- **Backend**: [View on Render](https://student-management-backend-xxxxx.onrender.com)

---

## 📜 API Endpoints

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| GET    | `/students`     | Fetch all students     |
| POST   | `/students`     | Add a new student      |
| PUT    | `/students/:id` | Update student details |
| DELETE | `/students/:id` | Delete a student       |

---

## 📌 Features

✅ Add, Edit, Delete student records ✅ Upload student photos (Cloudinary Integration) ✅ Responsive UI with Tailwind CSS / Bootstrap ✅ Secure API with Express.js ✅ Hosted on Vercel (Frontend) and Render (Backend)

---






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
