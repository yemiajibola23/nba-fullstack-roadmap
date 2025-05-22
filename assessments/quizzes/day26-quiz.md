# ✅ Day 26 Quiz – Auth System (Signup/Login)

**Score: 4 / 5**

---

### 1. Fill in the Blank

**Q:** To securely store passwords in the database, we use the function `___________` from the `bcrypt` library.

**Your Answer:** `hash`  
**Correct Answer:** ✅ `hash`

---

### 2. Code Debug

```js
const user = findUserByUsername(username);
const match = bcrypt.compare(password, user.password);
if (!match) {
  return res.status(401).json({ error: "Invalid credentials" });
}
```

**Q:** What critical issue exists in the above code?

**Your Answer:** `C`  
**Correct Answer:** ✅ `C` – `bcrypt.compare()` is asynchronous but not awaited

---

### 3. Short Answer

**Q:** Why do we _not_ return the user’s password hash in the response from the server, even though it’s encrypted?

**Your Answer:** Bad privacy. It could be decrypted somehow and the user doesn't need to see it.  
**Correct Answer:** ✅ Partial credit  
**Explanation:** Password hashes should never be exposed. Even though they're one-way encrypted, showing them could enable brute force or rainbow table attacks.

---

### 4. Multiple Choice

**Q:** What’s the purpose of `express.json()` middleware in our server setup?

**Your Answer:** `C`  
**Correct Answer:** ✅ `C` – It parses incoming request bodies with JSON payloads

---

### 5. Code Output

```js
const res = await fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "yemi", password: "secret" }),
});

console.log(res.json());
```

**Your Answer:** `A`  
**Correct Answer:** ❌ `B` – `res.json()` returns a Promise, not the final data

---
