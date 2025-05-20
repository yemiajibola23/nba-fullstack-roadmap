# 🪄 Day 22 Reflection – SQLite Foreign Keys + JOINs

**Date:** May 20, 2025  
**Topic:** Relational Schema Design & Foreign Key Integration

---

### ✅ What I Built

- Added a `teams` table to my SQLite database and defined a foreign key (`team_id`) in the `players` table.
- Updated the backend to perform a `LEFT JOIN` between `players` and `teams`, allowing for combined data queries.
- Ensured that team names are now returned alongside player stats in the API response.
- Updated the React frontend to display the player's team name next to their name.

---

### 💡 What I Learned

- How to define and enforce foreign key relationships in SQLite.
- The importance of enabling `PRAGMA foreign_keys = ON` when using SQLite.
- How `LEFT JOIN` allows players without a team to still appear in query results.
- Why `CREATE TABLE IF NOT EXISTS` is safer than dropping tables every time.
- How to write an idempotent seed script to safely re-run without duplicating data.

---

### 🤔 Challenges I Faced

- Initially had a bug where I was querying the wrong table for player count, which caused the seed to silently skip.
- Learned the importance of confirming which database file I'm connected to when querying and seeding.
- Forgot to comment out `DROP TABLE` logic, which was wiping out the schema after seeding — added a toggle flag to control this.

---

### 🚀 What's Next

- Extract reusable React components (e.g., `PlayerCard`, `PlayerForm`) for better structure. *(Day 23 preview!)*
- Consider building a backend migration system later if schema changes continue.
- Continue practicing advanced SQL queries and optimizing backend response structures.

---

**Confidence Level:** High 🔥  
**Refactor Candidates:** Add optional team selection in the future for new players.

