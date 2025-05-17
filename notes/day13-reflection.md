# 🪞 Day 13 Reflection – SQLite Model Layer

**Date:** May 16, 2025  
**Status:** ✅ Completed  
**Topic:** Abstract SQL into `models/`, prep for testability

---

## ✅ What I Accomplished  
- Created a dedicated `models/playerModel.js` file for database logic  
- Moved `getAllPlayers`, `addPlayer`, and `deletePlayer` into the model layer  
- Refactored the controller to delegate DB operations to model functions  
- Wrote unit tests for all player model functions using Jest  
- Ran and passed all tests, validating that the new structure is reliable  

---

## 💡 What I Learned  
- How to separate SQL logic from controllers to improve maintainability  
- How `better-sqlite3` returns metadata like `lastInsertRowid` and `changes`  
- Why checking `result.changes > 0` is a clean way to validate `DELETE` operations  
- Importance of committing both `package.json` and `package-lock.json` for dependency management  

---

## 🧠 Takeaways  
This refactor pushed me toward writing cleaner, testable backend code. It sets a solid foundation for integrating a service layer next. I now understand how to isolate database logic for better scalability and unit testing, which is essential for building real-world APIs.

---

## 📁 Files Created
- `models/playerModel.js`  
- `__tests__/models/playerModel.test.js`  
- `day13-quiz.md` (quiz results)

---

## 🔗 Next Step  
Tomorrow, I’ll move into **backend testing with Jest** for the full controller layer and API routes.

