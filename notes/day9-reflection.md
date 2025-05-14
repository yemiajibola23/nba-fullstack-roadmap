# 🏀 Day 9 Reflection — Add POST Endpoint for Players

## 🎯 Objective
Implement a `POST /api/players` route that allows new player data to be submitted, validated, and stored in the SQLite database.

---

## ✅ What I Built
- A new API route to handle player creation via POST requests
- Validation rules to ensure input is clean and safe
- SQL `INSERT INTO` query using parameterized values to avoid injection
- A return structure that includes the newly inserted player's ID

---

## 🔧 What I Implemented
- Guard clause validation for `name` and `points`
- Parameterized database query using `db.run`
- REST Client test cases in `players.http` (successful and failure scenarios)
- Response structure using `this.lastID` from SQLite

---

## 🧠 What I Learned
- How to return early from route handlers for cleaner code
- When to use shorthand syntax in JavaScript object literals
- How to test APIs using REST Client in VS Code
- Why parameterized SQL queries are more secure and maintainable

---

## 🔗 Next Step
Add persistent user-facing forms in the frontend to submit new players via the POST route.
