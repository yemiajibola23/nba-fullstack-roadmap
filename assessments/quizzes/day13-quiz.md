# 🧪 Day 13 Quiz – SQLite Model Layer

**Date:** May 16, 2025  
**Type:** Multiple Choice + Short Answer  
**Score:** 5/5 ✅

---

## Questions & Answers

1. **What is the main benefit of separating SQL logic into a `models/` layer?**  
   ✅ **C – It promotes separation of concerns and makes logic testable**

2. **In the `addPlayer(name, points)` model function, what does `stmt.run(name, points)` return?**  
   ✅ **C – An object with metadata including `lastInsertRowid`**

3. **What does `result.changes > 0` help you determine in `deletePlayer(id)`?**  
   ✅ *It helps you determine if your command affected any rows in the database.*

4. **Why should `package-lock.json` be committed to version control?**  
   ✅ *To ensure everyone gets the same version.*

5. **What does the controller layer *not* do after this refactor?**  
   ✅ *The controller layer does not handle any of the DB logic.*

---

### 📘 Reflection
This quiz solidified best practices around modularizing backend logic. Understanding how to separate responsibilities between the controller and model layers makes the codebase more maintainable and testable. The questions helped reinforce concepts like return values from `stmt.run()` and the importance of deterministic dependency management.
