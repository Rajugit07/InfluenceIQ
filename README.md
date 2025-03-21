# InfluenceIQ

## 🚀 Overview

InfluenceIQ is a **full-stack influencer ranking system** that fetches influencer data from a dummy API and provides a real-time interactive platform for users and admins.

### 🔹 Features

- **User Authentication** (JWT-based login/signup)
- **Admin Dashboard** (Manage influencers)
- **Search & Sorting** (Filter influencers based on credibility, longevity, engagement)
- **Beautiful UI** (Vite, React.js, Bootstrap 5)
- **API Integration** (Fetches influencer data from Dummy JSON API)

---

## 🏗️ Tech Stack

### **Frontend**

- React.js (Vite)
- Tailwind CSS
- React Router
- Axios

### **Backend**

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt.js (for password hashing)

---

## 📂 Folder Structure

```
influenceIQ/
│── backend/                     # Backend (Node.js, Express, MongoDB)
│   ├── config/                   # Configuration files
│   ├── controllers/              # Business logic for routes
│   ├── middleware/               # Middleware functions
│   ├── models/                   # MongoDB Models
│   ├── routes/                   # API Routes
│   ├── server.js                  # Express Server
│   ├── .env                        # Environment Variables
│── frontend/                     # Frontend (Vite + React.js)
│   ├── src/                        
│   │   ├── assets/                 # Images, Styles
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Main Pages (Home, Login, Signup, Admin)
│   │   ├── context/                 # Global State Management
│   │   ├── App.jsx                   # Main App Component
│   │   ├── main.jsx                  # React Entry Point
│   ├── vite.config.js                 # Vite Configuration
│   ├── index.html                     # Main HTML file
│── README.md                          # Project Documentation
```

---

## 🛠️ Setup & Installation

### **1️⃣ Clone Repository**

```sh
git clone https://github.com/your-username/influenceIQ.git
cd influenceIQ
```

### **2️⃣ Backend Setup**

```sh
cd backend
npm install
```

- Create a `.env` file:

```env
MONGO_URI=mongodb+srv://your_mongodb_connection
JWT_SECRET=your_jwt_secret
```

- Run the backend:

```sh
npm start
```

### **3️⃣ Frontend Setup**

```sh
cd ../frontend
npm install
npm run dev
```

---

## 📌 API Endpoints

### **Auth Routes**

| Method | Endpoint           | Description |
| ------ | ------------------ | ----------- |
| POST   | `/api/auth/signup` | User Signup |
| POST   | `/api/auth/login`  | User Login  |

### **Influencer Routes**

| Method | Endpoint               | Description                |
| ------ | ---------------------- | -------------------------- |
| GET    | `/api/influencers`     | Fetch all influencers      |
| POST   | `/api/influencers`     | Add new influencer (Admin) |
| DELETE | `/api/influencers/:id` | Delete influencer (Admin)  |

---

## 🎨 Frontend Features

### **1️⃣ Home Page**

- Displays influencers in a card format
- Search influencers by name
- Sort influencers by credibility, engagement, or followers

### **2️⃣ Login & Signup Pages**

- Users can register & log in
- JWT token-based authentication

### **3️⃣ Admin Panel**

- View, Add & Delete influencers
- Protected Route (Only Admins can access)

---

## 💡 Contributing

1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

---

## 📜 License

This project is **open-source** under the **MIT License**.

