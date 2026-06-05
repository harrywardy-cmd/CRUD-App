# MERN User Management Platform

A full-stack user management application built using the MERN stack, featuring secure authentication, role-based access control, protected API endpoints, and complete user lifecycle management.

This project demonstrates modern full-stack development practices including authentication, authorization, REST API design, database modelling, frontend routing, and secure user management workflows.

---

# Project Overview

The application simulates a real-world user administration platform where authenticated users can access protected resources and administrators can manage user accounts through a secure interface.

The project was designed to strengthen understanding of full-stack application architecture, authentication systems, API security, and role-based permissions.

---

# Engineering Highlights

### Secure Authentication

Implemented JSON Web Token (JWT) authentication with encrypted password storage using bcrypt to ensure secure user registration and login workflows.

### Role-Based Access Control (RBAC)

Designed and implemented an authorization system supporting multiple permission levels, allowing administrators to manage all users while restricting standard users to approved actions.

### RESTful API Architecture

Built a modular Express.js backend following REST principles with structured routing, middleware, controllers, and database models.

### Full CRUD Functionality

Implemented complete Create, Read, Update, and Delete operations with validation, protected access controls, and role-aware permissions.

### Database Design

Developed scalable MongoDB schemas using Mongoose to manage user data, authentication information, and role assignments.

---

# Technology Stack

## Frontend

* React
* React Router
* Axios
* Bootstrap
* CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Security

* JSON Web Tokens (JWT)
* bcrypt Password Hashing
* Authentication Middleware
* Route Protection

---

# Key Features

## Authentication System

* User registration
* Secure login
* JWT generation and validation
* Password encryption using bcrypt
* Session persistence

## Authorization System

* Admin permissions
* Standard user permissions
* Protected API endpoints
* Role-based route access

## User Management

* Create users
* View users
* Update user information
* Delete users
* Retrieve individual user records

## Frontend Experience

* Responsive user interface
* Protected routes
* Dynamic navigation
* Form validation
* Real-time user feedback

---

# System Architecture

```text id="mernarch"
Client (React)
│
├── Authentication Pages
├── User Management Views
├── Protected Routes
└── API Service Layer
        │
        ▼
Express API Server
│
├── Authentication Middleware
├── User Controllers
├── Role Authorization
├── Validation Logic
└── REST Endpoints
        │
        ▼
MongoDB Database
│
├── User Records
├── Authentication Data
└── Role Information
```

---

# Authentication Flow

```text id="authflow"
User Registration
        │
        ▼
Password Hashing (bcrypt)
        │
        ▼
MongoDB Storage
        │
        ▼
User Login
        │
        ▼
JWT Generation
        │
        ▼
Client Storage
        │
        ▼
Authenticated Requests
        │
        ▼
Middleware Validation
        │
        ▼
Protected Resources
```

---

# API Endpoints

| Method | Endpoint             | Description        | Access        |
| ------ | -------------------- | ------------------ | ------------- |
| POST   | /api/user            | Register User      | Public        |
| POST   | /api/login           | Authenticate User  | Public        |
| GET    | /api/users           | Retrieve All Users | Admin         |
| GET    | /api/user/:id        | Retrieve User      | Authenticated |
| PUT    | /api/update/user/:id | Update User        | Admin / Owner |
| DELETE | /api/delete/user/:id | Delete User        | Admin         |

---

# Repository Structure

```text id="merntree"
MERN-CRUD/
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── routing/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── configuration/
│
└── README.md
```

---

# Technical Challenges Solved

### Authentication Security

Implemented secure password storage and token-based authentication to prevent unauthorised access.

### Access Control

Designed permission logic that enforces different levels of access depending on user roles.

### Frontend-Backend Integration

Connected React components to Express APIs using Axios while maintaining clean separation between presentation and business logic.

### Route Protection

Protected frontend pages and backend endpoints using authentication middleware and token verification.

---

# Running Locally

Clone the repository:

```bash id="mern1"
git clone https://github.com/harrywardy-cmd/CRUD-App.git

cd CRUD-App
```

### Backend

```bash id="mern2"
cd server

npm install

npm start
```

### Frontend

```bash id="mern3"
cd client

npm install

npm start
```

---

# Environment Variables

```env id="mern4"
MONGO_URI=
JWT_SECRET=
PORT=8000
```

---

# Learning Outcomes

This project provided hands-on experience with:

* Full-Stack Development
* REST API Design
* Authentication & Authorization
* JWT Security
* Password Hashing
* Role-Based Access Control
* MongoDB Data Modelling
* React State & Routing
* Frontend-Backend Integration

---

# Why I Built This Project

Authentication and authorization are fundamental requirements in modern software systems.

This project was created to gain practical experience building secure user management platforms while learning how authentication flows, access control, database persistence, and frontend applications interact within a full-stack environment.

The application demonstrates many of the same architectural patterns commonly found in production business applications, including user administration systems, SaaS platforms, and internal enterprise tools.

---

# Author

Harry Ward

GitHub: https://github.com/harrywardy-cmd

Portfolio: https://harry-ward-portfolio.vercel.app

LinkedIn: https://www.linkedin.com/in/harry-ward-b2b9b4319
