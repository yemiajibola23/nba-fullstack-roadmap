# 🏀 Day 17 Reflection – React Delete + Optimistic UI

## 📅 Date

May 18, 2025

## 🧠 What I Learned

Today I learned how to implement deletion functionality in a React frontend, connecting it to an existing Express backend API. I explored the concept of optimistic UI updates — a powerful pattern where the UI reflects the expected result of an operation _before_ the server confirms it. This greatly improves user experience by making the app feel faster and more responsive.

I also learned how to handle edge cases where optimistic updates may fail. I added fallback rollback logic that restores the previous state if the network request fails or the server returns an error. This taught me the importance of error handling even in optimistic flows.

## ⚙️ What I Built

- Added a Delete button to each `PlayerCard` component
- Wrote a `handleDelete` function in `Leaderboard.jsx` that:
  - Optimistically removes a player from state
  - Sends a `DELETE` request to the server
  - Rolls back the UI on failure
- Ensured user feedback using `alert()` for error states

## 🧩 Challenges

I forgot to close the `handleDelete` function properly, which caused a syntax issue. Catching that helped reinforce the importance of function scoping. Additionally, it took some thought to figure out where to best capture and revert the old state for a proper rollback.

## 🚀 Next Steps

Tomorrow I’ll be working on **React global state with Context**, which will allow me to manage shared data (like players and alerts) across components without prop-drilling. This will be a foundational step toward cleaner architecture and better state handling.

## 🔁 Workflow Notes

- Completed quiz and reflection
- Handled optimistic updates and fallback
- Committed code in two stages for clarity
