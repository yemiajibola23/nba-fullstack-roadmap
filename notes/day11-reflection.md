# Day 11 Reflection – Backend Restructure & POST Route Fix

**🗓 Date:** May 15, 2025  
**📍 Focus:** Modularizing and rebuilding the backend using working logic

---

## ✅ What I Did

- Backed up the unstable backend code to avoid data loss
- Wiped and rebuilt the `fullstack/backend/` folder from scratch
- Created a clean modular structure with:
  - `routes/`
  - `controllers/`
  - `db/`
  - Entry points (`app.js`, `server.js`)
- Replaced `sqlite3` with `better-sqlite3` for performance and simplicity
- Re-implemented and tested working GET and POST routes:
  - `GET /api/players`
  - `POST /api/players`
- Verified that POST issues from before are resolved in the new setup

---

## 🔍 What I Learned

- Clean architecture and modularity make debugging and scaling much easier
- `better-sqlite3` is much cleaner for small apps with synchronous logic
- Maintaining backups while refactoring is critical for safe iteration
- Proper route/controller/db separation prevents tightly coupled logic

---

## ⚠️ Challenges

- Remembering to install dependencies inside the correct folder
- Needed to rethink how files were organized before everything worked smoothly
- Accidentally forgot to rename `nba.db` to `nba.sqlite3`, causing a mismatch at first

---

## 🧠 Next Steps

- Add `PUT` and `DELETE` support for players
- Expand schema to include games or plays
- Connect this backend to the frontend leaderboard page
- Consider adding validation and error handling middleware

---

## 🚀 Highlight of the Day

Seeing the POST route finally work in the new structure with clean, minimal code — no more hanging or ambiguous bugs.
