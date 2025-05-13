# 🏀 Day 8 Reflection — Add SQLite to Express Backend

## 🎯 Objective
Replace the static players JSON file with a persistent database using SQLite. This enables more dynamic and scalable backend data management.

---

## ✅ What I Built
- Connected Express to an SQLite database using the `sqlite3` package
- Created a schema and seeded sample data with `data.sql`
- Built an `init-db.js` script to create/reset the database
- Updated the `/api/players` route to query the `players` table using SQL

---

## 🔧 What I Implemented
- Used `fs.readFileSync()` and `db.exec()` to run SQL scripts
- Queried the database with `db.all()` in the Express route
- Returned results as JSON, sorted via SQL (`ORDER BY points DESC`)
- Cleaned up static file use and moved toward a real data layer

---

## 🧠 What I Learned
- How to use SQLite in a Node.js project
- The difference between synchronous and asynchronous file reading
- Why sorting data at the database level is preferred over in-app sorting
- How to structure backend apps with reusable DB helpers (`db.js`)

---

## 🔗 Next Step
Introduce `POST` endpoints to allow adding new players dynamically, and later integrate the database with the AI/ML component for data analysis.
