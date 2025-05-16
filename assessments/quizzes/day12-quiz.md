# 🧪 Day 12 Quiz – DELETE Route + Frontend Integration

**Date:** May 16, 2025  
**Type:** Multiple Choice + Short Answer  
**Score:** 4/5 ✅

---

## Questions & Answers

1. **What does .run(id) return with better-sqlite3?**  
   ✅ **B – A result object with the number of changes**

2. **Does fetch(`/api/players/${id}`) work on Live Server by default?**  
   ❌ **False** – It tries to call the frontend port (5500) instead of the backend (3000)

3. **Why check result.changes === 0?**  
   ✅ *To see if any rows matched the DELETE. If 0, return 404 because no record was affected.*

4. **What status code should the backend return if no player is found?**  
   ✅ **C – 404 Not Found**

5. **What does this fetch return if the player exists?**  
   ✅ **A – { success: true }**

---

### 📘 Reflection
This quiz helped reinforce RESTful DELETE route design, optimistic UI updates, and understanding the difference between ports in full stack development. Debugging CORS and `fetch()` behavior with Live Server was especially helpful.
