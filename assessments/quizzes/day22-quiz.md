# 🧠 Day 22 Quiz – SQLite Foreign Keys + Joins

**Score:** 5 / 5 ✅

---

### Questions & Answers

**1. What does a `FOREIGN KEY` in SQL enforce?**  
**Your Answer:** C – Referential integrity between tables ✅  
**Explanation:** A foreign key ensures that the value in one table matches a primary key in another, preventing orphaned references.

---

**2. Which SQL clause is used to combine data from two tables based on a relationship?**  
**Your Answer:** B – JOIN ✅  
**Explanation:** `JOIN` is used to merge rows from two or more tables based on a related column between them.

---

**3. In your seed script, what method retrieves the ID of the inserted row?**  
**Your Answer:** C – result.lastInsertRowid ✅  
**Explanation:** In `better-sqlite3`, this property gives the ID of the last inserted row.

---

**4. In a LEFT JOIN between `players` and `teams`, what happens if a player has no team?**  
**Your Answer:** C – `team` will be `null` ✅  
**Explanation:** `LEFT JOIN` includes all players, even those with no matching team, filling in `null` for team fields.

---

**5. Why use `CREATE TABLE IF NOT EXISTS`?**  
**Your Answer:** D – It safely avoids recreating an existing table ✅  
**Explanation:** Prevents accidental overwriting of data when initializing tables.

