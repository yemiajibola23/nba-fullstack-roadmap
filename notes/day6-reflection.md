# 🏀 Day 6 Reflection — Building a Node.js + Express API

## 🎯 Objective
Set up a backend Express server to serve NBA player data via a REST API (`GET /api/players`) and decouple data from frontend code.

---

## ✅ What I Built
- A Node.js + Express backend that returns NBA player stats in JSON format
- A modular route system for clean code organization
- A data-driven structure using an external `players.json` file

---

## 🔧 What I Implemented

### 📁 `backend/server.js`
- Initialized an Express app
- Added a test route (`/`)
- Mounted `/api/players` using `express.Router()`
- Applied `express.json()` middleware

### 📁 `routes/players.js`
- Created a route handler module
- Defined `GET /api/players` to return a list of players
- Replaced hardcoded array with dynamic JSON data import

### 📁 `data/players.json`
- Stored all player data externally in a structured JSON file
- Enabled clean data separation for future expansion

---

## 🧠 What I Learned
- How to build a simple API with Express
- Why `res.json()` is preferred for API responses
- How to use Express Router for modular routes
- Why separating logic and data improves scalability
- When file-based data access breaks down in production
- The need for databases or APIs in real-world apps

---

## 🔗 Next Step
Connect this backend to the frontend using `fetch()` in `script.js`, so the leaderboard loads data from `/api/players` instead of a hardcoded array.

