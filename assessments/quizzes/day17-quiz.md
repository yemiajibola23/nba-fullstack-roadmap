# 🧠 Day 17 Quiz: React Delete + Optimistic UI

**Score:** 5/5 ✅

---

### 1. What does an _optimistic UI update_ aim to do?

**Your Answer:** C  
**Correct Answer:** ✅ C. Update the UI immediately assuming the operation will succeed  
**Explanation:** Optimistic UI skips waiting for the server and assumes success to give a snappy user experience.

---

### 2. Which React hook is used to update state when deleting a player?

**Your Answer:** C  
**Correct Answer:** ✅ C. `useState`  
**Explanation:** We update the `players` state array using `useState` when handling delete actions.

---

### 3. What does the fallback rollback logic do?

**Your Answer:** D  
**Correct Answer:** ✅ D. Restores the previous state if the delete request fails  
**Explanation:** By storing a snapshot of the prior state, we can revert the UI if the delete request fails.

---

### 4. True or False: Optimistic UI can make apps feel faster and more responsive to the user.

**Your Answer:** ✅ True  
**Explanation:** It improves UX by making the app feel instant and responsive.

---

### 5. Where is the actual network call to delete a player made?

**Your Answer:** D  
**Correct Answer:** ✅ D. Both B and C  
**Explanation:** The network request is sent from `Leaderboard.jsx`, and the server handles it via the backend `DELETE` route.
