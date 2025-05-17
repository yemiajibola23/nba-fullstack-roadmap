# 🧪 Day 14 Quiz – API Testing with Jest

**Date:** May 17, 2025  
**Type:** Multiple Choice + Short Answer  
**Score:** 5/5 ✅

---

## Questions & Answers

1. **What is the primary role of the `supertest` library?**  
   ✅ **C – Simulate HTTP requests to your Express server**

2. **You should call `db.close()` in `afterEach()` to isolate tests.**  
   ✅ **False**

3. **Why use a separate test database or in-memory DB?**  
   ✅ _To avoid polluting production data and ensure safe, isolated tests._

4. **What’s wrong with `.delete("api/players/5")`?**  
   ✅ _Missing `/` at the beginning — should be `.delete("/api/players/5")`_

5. **Best way to clean your test DB before each test?**  
   ✅ **B – Add a DELETE FROM statement inside `beforeEach()`**

---

### 📘 Reflection

This quiz solidified how to structure and isolate full-stack tests, especially with SQLite and Express. Learning how to clean test environments and use `supertest` effectively is setting the foundation for reliable backend coverage.
