# MERN User Management Platform

A full-stack user management platform built with the MERN stack (MongoDB, Express.js, React, and Node.js), featuring secure authentication, JWT-based authorization, protected API endpoints, and cloud deployment using MongoDB Atlas, Render, and Vercel.

The application allows users to register, authenticate, and manage user records through a responsive web interface while enforcing secure access to protected resources.

---

## Live Demo

Frontend: https://your-vercel-url.vercel.app

Backend API: https://crud-app-mphw.onrender.com

---

## Project Overview

This project was built to strengthen practical experience with modern full-stack web development, REST API design, cloud deployment, authentication systems, and frontend-backend integration.

The application demonstrates many of the patterns commonly used in production SaaS applications and internal business systems, including:

* Secure user authentication
* Protected API endpoints
* Database persistence
* Cloud-hosted infrastructure
* Full CRUD functionality
* Client-server architecture

---

## Engineering Highlights

### JWT Authentication

Implemented secure authentication using JSON Web Tokens (JWT) to protect application resources and validate user sessions.

### Password Security

User passwords are securely hashed using bcrypt before being stored in MongoDB, ensuring plaintext credentials are never persisted.

### Full CRUD Operations

Users can create, retrieve, update, and delete records through a secure REST API backed by MongoDB Atlas.

### Cloud Deployment

The application is deployed using a modern cloud architecture:

* Frontend hosted on Vercel
* Backend hosted on Render
* Database hosted on MongoDB Atlas

### RESTful API Design

Designed a modular Express.js backend using middleware, routing, controllers, and database models to maintain clean separation of concerns.

---

## Technology Stack

### Frontend

* React
* React Router
* Axios
* Bootstrap
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Security

* JSON Web Tokens (JWT)
* bcrypt Password Hashing
* Authentication Middleware
* Protected API Routes

### Cloud & Deployment

* Vercel
* Render
* MongoDB Atlas
* GitHub

---

## Key Features

### Authentication

* User Registration
* Secure Login
* JWT Token Generation
* JWT Validation
* Password Hashing with bcrypt
* Protected Routes

### User Management

* Create Users
* View Users
* Update Users
* Delete Users
* Retrieve Individual User Records

### Frontend Experience

* Responsive User Interface
* Dynamic Routing
* Form Validation
* Real-Time Notifications
* User-Friendly Navigation

---

## System Architecture

Client (React)
│
├── Authentication Pages
├── User Management Views
├── Protected Routes
└── Axios API Layer
│
▼
Express API Server (Render)
│
├── Authentication Middleware
├── User Controllers
├── Validation Logic
└── REST Endpoints
│
▼
MongoDB Atlas
│
├── User Records
├── Authentication Data
└── Application Storage

---

## Deployment Architecture

Browser
│
▼
Vercel (React Frontend)
│
▼
Render (Node.js / Express API)
│
▼
MongoDB Atlas (Cloud Database)

---

## API Endpoints

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| POST   | /api/user            | Register User      |
| POST   | /api/login           | Authenticate User  |
| GET    | /api/users           | Retrieve All Users |
| GET    | /api/user/:id        | Retrieve User      |
| PUT    | /api/update/user/:id | Update User        |
| DELETE | /api/delete/user/:id | Delete User        |

---

## Running Locally

### Clone Repository

```bash
git clone https://github.com/harrywardy-cmd/CRUD-App.git
cd CRUD-App
```

### Backend Setup

```bash
cd server
npm install
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

---

## Environment Variables

Backend (.env)

```env
MONGO_URL=
JWT_SECRET=
PORT=8000
```

Frontend (.env)

```env
REACT_APP_API_URL=http://https://crud-app-mphw.onrender.com
```

---

## Learning Outcomes

This project provided practical experience with:

* Full-Stack MERN Development
* REST API Design
* MongoDB Data Modelling
* JWT Authentication
* Password Hashing & Security
* Cloud Deployment
* React State Management
* React Routing
* Frontend-Backend Integration
* Production Environment Configuration

---

## Author

Harry Ward

GitHub: https://github.com/harrywardy-cmd

Portfolio: https://harry-ward-portfolio.vercel.app

LinkedIn: https://www.linkedin.com/in/harry-ward-b2b9b4319
