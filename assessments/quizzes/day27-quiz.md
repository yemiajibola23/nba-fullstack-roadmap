# 🧠 Day 27 Quiz – Auth Sessions + Middleware

**Date:** May 21, 2025  
**Score:** 4 / 5 ✅

---

### 1. What does `req.session.userId = user.id` do in Express?  
**Your Answer:** C ✅  
**Correct Answer:** C  
**Explanation:** This stores the user's ID in the session object on the server.

---

### 2. Which middleware structure is valid for Express?  
**Your Answer:** D ❌  
**Correct Answer:** B  
**Explanation:** Express middleware must follow `(req, res, next)`.

---

### 3. Fill in the blank:  
**Your Answer:** cookie ✅  
**Correct Answer:** cookie  
**Explanation:** Session IDs are stored in cookies on the client side.

---

### 4. Identify the error:  
**Your Answer:** D ✅  
**Correct Answer:** D  
**Explanation:** `res.json()` must be inside the `req.session.destroy()` callback to avoid premature response.

---

### 5. What happens if a protected route is accessed without logging in?  
**Your Answer:** D ✅  
**Correct Answer:** D  
**Explanation:** Middleware should respond with 401 Unauthorized.

---
