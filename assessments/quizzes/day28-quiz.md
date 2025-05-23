# 🧠 Day 28 Quiz – User-Specific Data + Team Integration

**Date:** May 22, 2025  
**Score:** 5/5 ✅  

---

### 1. Multiple Choice  
**What is the purpose of setting `credentials: "include"` in a frontend `fetch()` request?**

- [ ] A. To send headers with JSON content  
- [ ] B. To allow cross-origin GET requests  
- [x] C. To send cookies and session credentials  
- [ ] D. To enable automatic retries on failed requests  

✅ Correct Answer: C

---

### 2. Code Understanding  
**Given this SQL:**

```sql
SELECT players.*, teams.name AS team_name
FROM players
LEFT JOIN teams ON players.team_id = teams.id
WHERE players.user_id = ?
```

**What will `team_name` be if a player does not have a `team_id`?**

- [ ] A. The ID of a default team  
- [ ] B. An empty string  
- [x] C. `null`  
- [ ] D. The first team in the database  

✅ Correct Answer: C

---

### 3. True or False  
**If the cookie `connect.sid` exists in the browser, the user is guaranteed to be authenticated on page reload.**

- [x] False ✅

---

### 4. Fill in the Blank  
**To persist session state across page refreshes in a React app, you should add a `GET /api/___` route that checks the server-side session and returns the user's identity.**

✅ Answer: `me`

---

### 5. Debugging Scenario  
**You call `fetch("/api/players")` and get a `200 OK`, but an empty array. What is the most likely cause?**

- [ ] A. The database has been dropped  
- [ ] B. The session cookie expired mid-request  
- [ ] C. The user is not logged in  
- [x] D. The logged-in user has no players in the database  

✅ Correct Answer: D
