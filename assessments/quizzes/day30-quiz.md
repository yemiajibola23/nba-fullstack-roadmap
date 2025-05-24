# 🧪 Day 30 Assessment – Auth & Sessions

### ✅ Multiple Choice

**1. What does `bcrypt.hash(password, 10)` do?**  
**Your Answer:** C ✅  
**Correct Answer:** C  
**Explanation:** Hashes the password with 10 salt rounds to increase security.

**2. What does the `requireLogin` middleware do?**  
**Your Answer:** C ✅  
**Correct Answer:** C  
**Explanation:** Ensures that a user is authenticated before allowing access to protected routes.

**3. What does `resave: false` mean in `express-session`?**  
**Your Answer:** B ❌  
**Correct Answer:** C  
**Explanation:** It tells the session store not to save the session if it wasn’t modified.

**4. Which is the most secure cookie setting for dev?**  
**Your Answer:** C ❌  
**Correct Answer:** B  
**Explanation:** In development, we usually use `httpOnly: true, secure: false`. In production, both should be `true`.

**5. What happens if `req.session.user` is not set after login?**  
**Your Answer:** B ✅  
**Correct Answer:** B  
**Explanation:** Middleware like `requireLogin` will deny access if `req.session.user` is undefined.

---

### ✅ True/False

**6. Setting `req.session.user = {{ id, username }}` persists login across requests.**  
**Your Answer:** True ✅  
**Correct Answer:** True

**7. bcrypt can decrypt a hashed password.**  
**Your Answer:** False ✅  
**Correct Answer:** False

**8. You must call `req.session.save()` after setting session variables.**  
**Your Answer:** True ❌  
**Correct Answer:** False  
**Explanation:** Session variables are typically auto-saved unless an edge case occurs.

---

### ✅ Fill in the Blank

**9. The session middleware typically stores the session ID in the user's _cookie_.** ✅  
**10. `bcrypt.compare()` returns a _Promise_.** ✅

---

### ✅ Code Explanation

**11. What does this code do, and what’s the purpose of `await`?** ✅  
**Your Answer:** Valid – gets user credentials, compares hashed password, uses `await` due to async ops.  
**Explanation:** Prevents race conditions or accessing undefined values.

**12. What’s the role of `httpOnly` in a session cookie?** ❌  
**Correct Answer:** Prevents client-side JavaScript from reading the cookie (helps prevent XSS).

---

### ✅ Error Spotting

**13. Spot the bug:** ✅  
**Your Answer:** `req.session.user` may not exist before accessing `.id`.  
**Fix:** Use `req.session.user = { id, username }`.

---

### ✅ Short Answer

**14. Advantage of sessions over JWTs?** ✅  
**Your Answer:** Easier to use for beginners – fewer moving parts.  
**15. Why might `/profile` return 401 after login but not after refresh?** ✅ Partial  
**Your Answer:** Cookie may not be fully set yet.  
**Explanation:** Could be due to async timing or a missing `save()` call.

---

**🧠 Final Score: 12/15**

Great work! You're ready to move on to AI integration!
