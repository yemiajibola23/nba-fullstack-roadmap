# 📝 Day 27 Reflection – Auth Sessions + Middleware

**Date:** May 21, 2025  
**Topic:** Auth Sessions + Middleware

---

## ✅ What I Worked On

- Installed and configured `express-session` with `connect-sqlite3` to persist sessions in SQLite.
- Moved session setup into `app.js` to align with proper Express middleware order.
- Created login logic that stores `userId` in the session on successful authentication.
- Built a custom `requireLogin` middleware to protect routes like `POST /api/players`.
- Applied MVC principles by keeping controller logic in `usersController.js`.
- Implemented a logout route that destroys the session and clears the cookie.
- Successfully tested login, session persistence, route protection, and logout using `curl`.

---

## 🤔 What I Learned

- Express sessions store session data server-side and reference them via a cookie (`connect.sid`) on the client.
- Middleware functions in Express must follow the `(req, res, next)` signature to work correctly.
- Session middleware **must be loaded before** routes to attach the `req.session` object properly.
- Proper CORS configuration (`credentials: true`) is essential for cookies to be sent with cross-origin requests.

---

## 🧠 Takeaways

- Always restart the backend after adding or modifying route definitions and middleware!
- Using MVC and modular organization made integrating and testing session logic much easier.
- Sessions are a powerful and beginner-friendly way to manage user authentication without
