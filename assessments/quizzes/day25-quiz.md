# 🧠 Day 25 – Cumulative Assessment
📅 **Date:** May 21, 2025
📈 **Score:** 10 / 12 ✅

---

## Questions & Answers

### 1. What is one reason to separate a `PlayerCard` component from `Leaderboard`?
- **Your Answer:** C) It promotes reuse and readability
- **Result:** Correct

### 2. In a SQLite JOIN between `players` and `teams`, which column is most appropriate for linking the tables?
- **Your Answer:** C) players.team_id and teams.id
- **Result:** Correct

### 3. What is an advantage of optimistic UI updates when deleting a player?
- **Your Answer:** B) They make the UI update immediately before the server confirms
- **Result:** Correct

### 4. What is the primary purpose of the `useEffect` hook in your React app?
- **Your Answer:** C) To fetch data or perform side effects after rendering
- **Result:** Correct

### 5. Which of the following best describes the Context API in React?
- **Your Answer:** C) A method to share state across components without props
- **Result:** Correct

### 6. Why is a `dataKey="points"` required when using Recharts' `<Bar>` component?
- **Your Answer:** C) To tell the chart which field of your data to use for bar height
- **Result:** Correct

### 7. Which of these is a correct way to consume React Context?
- **Your Answer:** B) const [state, setState] = useContext(PlayerContext)
- **Result:** Incorrect (Correct: C)

### 8. Why might we move fetch logic into a separate service layer?
- **Your Answer:** C) To separate concerns and improve testability
- **Result:** Correct

### 9. Which SQL clause ensures that a player's team ID must exist in the `teams` table?
- **Your Answer:** C) FOREIGN KEY
- **Result:** Correct

### 10. What happens if a component that uses Context is outside the `<PlayerContext.Provider>`?
- **Your Answer:** A) It gets default values or errors
- **Result:** Correct

### 11. Fill in the blank: In React, component reusability is often achieved through ____ and _____.
- **Your Answer:** Contexts and modularization
- **Result:** Correct

### 12. When visualizing player data with a chart, what should your data format resemble?
- **Your Answer:** A) { chartType: "bar", dataKey: "x" }
- **Result:** Incorrect (Correct: C)
