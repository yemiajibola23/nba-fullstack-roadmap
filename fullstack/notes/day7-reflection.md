# 🏀 Day 7 Reflection — Connecting Frontend to Express API

## 🎯 Objective
Refactor the frontend to dynamically load NBA player data by fetching from the Express API instead of relying on hardcoded JavaScript arrays.

---

## ✅ What I Built
- Modified `script.js` to fetch player data from `http://localhost:3000/api/players`
- Replaced the static array with live data via `fetch()` and `async/await`
- Updated the Shuffle Rankings button to work with backend-fetched data

---

## 🔧 What I Implemented
- Used `fetch()` and `await response.json()` to retrieve and parse API data
- Stored the player list in a global `currentPlayers` variable
- Applied best practices by copying the array before shuffling (`[...currentPlayers]`)
- Preserved separation of rendering logic and data state

---

## 🧠 What I Learned
- How to make API calls using `fetch()` and handle async behavior
- Why we use `response.json()` instead of `response`
- The importance of immutability in rendering and UI logic
- How to wire backend-powered data into existing frontend UIs

---

## 🔗 Next Step
Add persistent storage using a database so the player list can be updated or expanded over time.
