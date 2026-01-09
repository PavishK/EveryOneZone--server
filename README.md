# 💬 EveryOneZone — Real-Time Chat Application

**EveryOneZone** is a real-time chat platform that connects everyone into a single interactive zone — **fast, secure, and fun**.

Built as a **full-stack personal project**, this application demonstrates real-time communication, authentication, and scalable backend architecture.

🌍 **Live Demo:** https://every-one-zone-client.vercel.app

---

## ✨ Features

- ⚡ Real-time messaging with **Socket.IO**
- 🔐 Secure authentication using **JWT**
- 🧑‍🤝‍🧑 Public chatroom support
- ⏱️ Message timestamps
- 🔔 Join & exit room toast notifications
- 📱 Fully responsive UI
- 💾 MongoDB for users & messages
- 🌙 Optional light/dark theme support

---

## 🛠️ Tech Stack

### 🔵 Frontend
- **Next.js**
- **Tailwind CSS**
- **Socket.IO Client**
- **JWT Authentication**

### 🔴 Backend
- **Node.js**
- **Express.js**
- **Socket.IO**
- **MongoDB + Mongoose**

---

## 📂 Project Structure

```bash
EveryOneZone/
├── client/       # Frontend (Next.js)
├── server/       # Backend (Express + Socket.IO)
└── README.md     # Documentation
````

---

## 🔐 Authentication Flow

### 🔑 Login

![Login](https://github.com/user-attachments/assets/6e7b3542-0ee5-4bfa-97dd-d67485571495)

### 📝 Register

![Register](https://github.com/user-attachments/assets/51d45158-e8d9-4dd3-8855-5d3f0a47ab06)

---

## 💬 Chat Room Experience

### 🌐 Public Chat Room

![Chat Room](https://github.com/user-attachments/assets/dc055bc3-902d-4e68-bfd7-8fe75c39e3d7)

---

### 🔔 Room Join Notification

![Room Join Toast](https://github.com/user-attachments/assets/2b4fa499-27b5-4d8d-ae09-e1293ce3b3bc)

### 🚪 Room Exit Notification

![Room Exit Toast](https://github.com/user-attachments/assets/bebec74b-e606-45b7-8ce7-78aaf0ba92c2)

---

### 🧪 Sample Chat Conversation

![Sample Chat](https://github.com/user-attachments/assets/6e519876-bfe4-4969-ae24-e420aad8c3d3)

---

## 🚀 Getting Started

### ⚙️ Prerequisites

* Node.js (v14+)
* npm / yarn
* MongoDB (local or Atlas)

---

## 🟦 Frontend Setup (Client)

### 1️⃣ Clone the Frontend Repo

```bash
git clone https://github.com/PavishK/EveryOneZone--client.git
cd EveryOneZone--client
npm install
```

### 2️⃣ Create `.env.local`

```env
PRODUCTION_STATUS=true
MONGODB_URL=your_mongodb_connection_string
NEXT_PUBLIC_SERVER_API=http://localhost:8080
SALT=00
JWT_SECRET=your_jwt_secret
```

> ⚠️ Never commit real secrets to GitHub

### 3️⃣ Run Frontend

```bash
npm run dev
```

📍 Runs on: [http://localhost:3000](http://localhost:3000)

---

## 🟥 Backend Setup (Server)

### 1️⃣ Clone the Backend Repo

```bash
git clone https://github.com/PavishK/EveryOneZone--server.git
cd EveryOneZone--server
npm install
```

### 2️⃣ Create `.env`

```env
CLIENT_URL=https://every-one-zone-client.vercel.app
PORT=8080
MONGODB_URL=your_mongodb_connection_string
```

### 3️⃣ Run Backend

```bash
npm start
```

📍 Runs on: [http://localhost:8080](http://localhost:8080)

---

## 📁 Folder Overview

```bash
client/
├── components/     # UI components
├── pages/          # Next.js routes
├── services/       # API & auth helpers
├── styles/         # Tailwind styles
├── public/         # Static assets
└── utils/          # Utilities

server/
├── controllers/    # Business logic
├── models/         # MongoDB schemas
├── routes/         # API routes
├── sockets/        # Socket.IO events
└── index.js        # Server entry
```

---

## 🔒 Security Highlights

* JWT-based authentication
* Protected API routes
* Secure WebSocket connections
* MongoDB schema validation
* CORS-protected backend

---

## 🎯 Project Purpose

This project was built to:

* Learn **real-time communication**
* Implement **Socket.IO with authentication**
* Build a **scalable full-stack app**
* Practice **Next.js + MongoDB integration**
* Create a **portfolio-ready chat system**

---

## 👨‍💻 Author

**Pavish K**
Full-Stack Developer

🔗 GitHub: [https://github.com/PavishK](https://github.com/PavishK)

⭐ If you like this project, don’t forget to star the repo!

---

## 📜 License

This project is licensed under **MY License**.
