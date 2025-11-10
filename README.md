# MERN Stack CRUD App (with Authentication & Role-Based Access)

A **full-stack MERN application** demonstrating user management with secure **JWT authentication**, **admin/user roles**, and full **CRUD (Create, Read, Update, Delete)** operations.  

Admins can manage all users, while normal users can only view others’ public details (name, email, and address).

---

##  Features

 **User Authentication** — Secure JWT-based login & signup  
 **Role-based Access** — Admin vs. regular user permissions  
 **CRUD Operations** — Create, view, edit, and delete users  
 **Password Hashing** — Securely stored passwords via bcrypt  
 **Protected Routes** — Middleware-controlled access  
 **React Frontend** — Fast and responsive UI using Axios + React Router  
 **RESTful API** — Clean and modular backend with Express + MongoDB  

---

## Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React, Axios, React Router, Bootstrap |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JWT (jsonwebtoken), bcrypt |
| **Styling** | CSS / Bootstrap |
| **UI Helpers** | react-hot-toast, jwt-decode |

---

##  Installation & Setup

### 1️ Clone the repository
```bash
git clone https://github.com/harrywardy-cmd/CRUD-App.git
cd mern-crud-app
```

---

### 2️ Setup the Backend

```bash
cd server
npm install
```

Create a **.env** file inside the `server` folder:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8000
```

Start the backend:
```bash
npm start
```

 Server runs on **http://localhost:8000**

---

### 3️ Setup the Frontend

```bash
cd client
npm install
```

Start the frontend:
```bash
npm start
```

 Client runs on **http://localhost:3000**

---

##  Authentication Flow

1.  **Sign Up:** Create a new account (default role = `user`)  
2.  **Login:** JWT token issued and stored in `localStorage`  
3.  **Access Routes:** Token verified on each request  
4.  **Admin Role:** Full control (view/add/edit/delete users)  
5.  **Normal User:** Can view all users’ public info  

---

##  Folder Structure

```
MERN-CRUD/
│
├── client/                # React Frontend
│   ├── src/
│   │   ├── addUser/       # Add new user form
│   │   ├── getUser/       # Display user list
│   │   ├── updateUser/    # Update existing user
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                # Express Backend
│   ├── controller/
│   │   └── userController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── model/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

##  API Endpoints

| Method | Endpoint | Description | Access |
|--------|-----------|-------------|--------|
| **POST** | `/api/user` | Register new user | Public |
| **POST** | `/api/login` | Login user | Public |
| **GET** | `/api/users` | Get all users | Admin |
| **GET** | `/api/user/:id` | Get user by ID | Logged-in user |
| **PUT** | `/api/update/user/:id` | Update user | Admin/User (self) |
| **DELETE** | `/api/delete/user/:id` | Delete user | Admin |

---

##  Example Admin Account

To promote a user to admin in MongoDB:
```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "<hashed_password>",
  "role": "admin"
}
```

>  Passwords are encrypted using **bcrypt**, so you must hash it before saving manually.

---

##  Future Improvements

-  Add pagination & search in user table  
-  Allow profile image uploads  
-  Create admin dashboard & statistics  
-  Token refresh mechanism  
-  Deploy on Render / Vercel / MongoDB Atlas  

---

##  Author

** Harry Ward**  
 harrywardy303@gmail.com 
 GitHub: https://github.com/harrywardy-cmd

---

###  If you found this project useful, don’t forget to star it on GitHub!


