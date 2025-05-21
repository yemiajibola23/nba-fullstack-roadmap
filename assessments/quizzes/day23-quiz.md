# 📘 Day 23 Quiz – Reusable React Components

**Date:** May 21, 2025

**Score:** 5/5 ✅


### Questions & Answers

**1. What is a key benefit of lifting state up into a context or parent component?**

- A. It slows rendering, which gives time for debugging
- B. It allows multiple components to share and modify the same data
- C. It avoids using `useEffect`
- D. It eliminates the need for event handlers

**✅ Correct Answer:** B

**💬 Explanation:** Sharing state via context lets multiple components access and modify data without excessive prop drilling.


**2. Which of the following is a good candidate for a reusable component?**

- A. A component that changes global theme color
- B. A component that only renders one very specific route
- C. A styled input form used in multiple places
- D. A config file used in build scripts

**✅ Correct Answer:** C

**💬 Explanation:** Reusable components are UI elements used repeatedly — like styled forms, buttons, or cards.


**3. In your current code, what argument is passed to `onAdd` inside `PlayerForm`?**

- A. Only the player's name
- B. A fully formed player object with `name` and `points`
- C. A fetch request
- D. A DOM event object

**✅ Correct Answer:** B

**💬 Explanation:** `PlayerForm` creates a `{ name, points }` object and passes it to the `onAdd` callback.


**4. What does `key={player.id}` do in the `map()` render of players?**

- A. It ensures each player gets rendered only once
- B. It prevents the user from deleting the player twice
- C. It helps React track list items for efficient DOM updates
- D. It creates a unique ID for the database

**✅ Correct Answer:** C

**💬 Explanation:** React uses the `key` prop to efficiently re-render only the items that change in a list.


**5. Why would you refactor pagination logic into a separate helper or hook in the future?**

- A. To allow it to work outside of React
- B. To reuse pagination across different lists and reduce clutter in `Leaderboard`
- C. To make `useState` run faster
- D. To store the current page in localStorage

**✅ Correct Answer:** B

**💬 Explanation:** Refactoring pagination logic into a hook makes it reusable across multiple components and keeps the UI clean.

