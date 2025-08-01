# 🖥️ Employee Management System – Frontend (React + Vite)

This project is the **frontend** interface for the Employee Management System. Built using **React**, **Vite**, and **Axios**, it allows users to perform Create, Read, Update, and Delete (CRUD) operations on employee records through a responsive and interactive UI. It consumes RESTful APIs provided by a Spring Boot backend.

---

## 📦 Tech Stack

- ⚛️ React (with Hooks)
- ⚡ Vite
- 📡 Axios
- 🎨 Bootstrap 5
- 🔀 React Router DOM

---

## 🚀 Features

- Add new employee with form validation
- Update existing employee data
- View a list of all employees
- Delete an employee
- Dynamic routing with form validation feedback
- Integration with Spring Boot backend via REST API

---

## 📂 Folder Structure

react-vite-starter-main/
├── public/
├── src/
│   ├── components/
│   │   └── EmployeeComponent.jsx
│   ├── services/
│   │   └── EmoloyeeService.js
│   ├── App.jsx
│   ├── main.jsx
├── package.json
├── vite.config.js
└── README.md

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16+ recommended)
- Backend running on `http://localhost:8080` (Spring Boot)

### Installation

```bash
git clone git@github.com:CodeForgeNet/react-vite-starter.git
cd react-vite-starter-main
npm install

Configure API Endpoint

Ensure the API base URL in src/services/EmoloyeeService.js points to your Spring Boot backend:

const BASE_URL = "http://localhost:8080/api/employees";

Run the App

npm run dev

Open your browser at:
👉 http://localhost:3000

⸻


🤝 Project Integration

This frontend works with the Employee Management Backend built in Spring Boot. Make sure the backend is running before interacting with this UI.
Backend Source -
https://github.com/CodeForgeNet/spring-jakartaee-project

⸻

📄 License

This project is open-source and available under the MIT License.

⸻

👨‍💻 Author

Karan Singh
Feel free to reach out for collaborations or improvements.

---

- Broken into a full-stack monorepo format

I can also generate screenshots, badges, or a portfolio-ready summary if needed!
