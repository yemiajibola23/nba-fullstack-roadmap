# 🧠 Day 29 Quiz – Profile Page + Avatar Upload

**Date:** May 23, 2025  
**Score:** 4 / 5 ✅  

---

### Question 1:
**Q:** What middleware is used to handle `multipart/form-data` uploads in Express?  
**Your Answer:** B) form-handler  
**Correct Answer:** C) multer  
❌ `multer` is the correct and widely used middleware for handling file uploads.

---

### Question 2:
**Q:** Why is `credentials: "include"` critical in a session-based fetch request?  
**Your Answer:** C) It allows cookies (like `connect.sid`) to be sent with the request  
✅ Correct!

---

### Question 3:
**Q:** You see `req.session = { cookie: { ... } }` but `req.session.user` is missing during a request. What’s the likely reason?  
**Your Answer:** B) `req.session.user` was never set  
✅ Correct!

---

### Question 4:
**Q:** In React, why might you see `401 Unauthorized` immediately after logging in, even if login was successful?  
**Your Answer:** B) Cookies are delayed and not yet available to fetch  
✅ Correct!

---

### Question 5:
**Q:** What’s the correct way to display a user-uploaded avatar from `/uploads/` in a React component?  
**Your Answer:** C) `<img src="http://localhost:3000/uploads/${filename}" />`  
✅ Correct!

---
