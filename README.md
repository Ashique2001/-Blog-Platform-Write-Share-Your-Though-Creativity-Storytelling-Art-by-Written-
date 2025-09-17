# Blog Assignment (Backend + Frontend + Mobile)

This repository contains a starter scaffold for the blog assignment:

- backend/  - Node.js + Express + MongoDB (auth, posts, profile)
- frontend/ - React + Redux Toolkit + SCSS (minimal pages)
- mobile/   - Flutter + GetX skeleton

blog-assignment/
│
├── frontend/    # React app
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── backend/     # Node.js + Express + MongoDB
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── README.md
│
├── mobile/      # React Native app (Expo or React Native CLI)
│   ├── App.js
│   ├── package.json
│   └── README.md
│
└── README.md    # Main README for submission


# Blog Assignment  

A full-stack blogging platform built with **React (frontend)**, **Node.js + Express + MongoDB (backend)**, and **React Native (mobile app)**.  

## Tech Stack  
- **Frontend (Web)**: React 18, React Router, Redux Toolkit, Axios, Sass  
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT Authentication  
- **Mobile**: React Native (Expo), Axios, React Navigation  
- **Database**: MongoDB  

---

## 📂 Project Structure  
- `/frontend` → React web app  
- `/backend` → Express + MongoDB REST API  
- `/mobile` → React Native mobile app  


::Run Backend
cd backend
npm install
npm start

:: Run Frontend
cd frontend
npm install
npm start

:: Run Frontend
cd frontend
npm install
npm start

:: Features
User signup & login (JWT authentication)
Create, view, and manage blog posts
User profiles
Responsive UI (Web + Mobile)
MongoDB data stora

::Prompting Techniques & AI Tools
Throughout development, I leveraged AI tools (ChatGPT) to:
Debugging – Example: when facing EADDRINUSE port issue, I prompted “how to fix Node.js server port already in use” and applied kill or port change solutions.

::Challenges Faced
Router nesting issue: Resolved by separating <BrowserRouter> in index.js.
Port conflicts (EADDRINUSE:5000): Solved by killing existing processes or changing ports.
Blank UI rendering: Fixed by adjusting routing and proxy configuration.
Mobile integration: Ensuring React Native communicates with the backend API correctly.
