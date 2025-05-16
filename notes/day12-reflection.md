# ✏️ Day 12 Reflection – DELETE + Frontend Wiring

**Date:** May 16, 2025  
**Time Spent:** ~2.5 hrs  
**Focus:** Backend DELETE endpoint, frontend integration with Live Server

---

## ✅ What I Built
- Implemented the `DELETE /api/players/:id` endpoint in the backend using `better-sqlite3`
- Integrated a Delete button into the vanilla JS leaderboard UI
- Verified deletion end-to-end using both `curl` and frontend interactions

---

## 🧠 What I Learned
- How to use `.run(id)` in `better-sqlite3` and interpret `.changes`
- Importance of using full URLs in `fetch()` when developing with Live Server
- How to identify and resolve 405 and CORS-related errors
- How to confirm DELETE behavior using the browser Network tab and terminal

---

## 🛠 Challenges
- Initial DELETE attempts failed with a `405` because requests were misrouted to Live Server
- DevTools in Safari made it harder to inspect `fetch` requests — had to use alternative methods (e.g. logging, curl)
- Needed to double-check exports and router wiring for backend DELETE functionality

---

## 🚀 Next Steps
- Start organizing DB logic into a separate `models/` directory
- Clean up controller logic to be more readable and testable
- Prepare for backend testing with Jest

---

## 📘 Reflection
This day clarified a lot about full-stack flow — seeing the DELETE endpoint work from database to UI felt like a major win. I’m more confident in debugging cross-origin issues, request methods, and browser behaviors. Feeling ready to take on the model layer and testing next.
