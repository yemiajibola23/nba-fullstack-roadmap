# 📆 Day 15 – React Setup with Vite

## What I Learned

- Set up a modern React app using Vite for lightning-fast development.
- Understood how components work in React — especially functional components like `App`, `Leaderboard`, and `PlayerCard`.
- Learned how to use `useEffect` to fetch data on component mount.
- Used `useState` to manage dynamic UI based on API data.

## What I Built

- A working React leaderboard that pulls real player data from the Express backend.
- Modular components (`Leaderboard` and `PlayerCard`) that scale cleanly as the UI grows.
- A dev proxy to fix CORS and port issues between frontend and backend.

## Challenges

- Blank screen bug caused by a missing `export default` in a component — took some detailed debugging and logging to catch.
- Vite initially failed due to missing `.css` files, which blocked the build completely.

## Next Steps

- Wire up delete functionality using a `DELETE` request and state updates.
- Style the player cards for visual polish.
- Begin adding form handling to submit new players.

## Reflection

Today marked the beginning of the React frontend era of this project. While the setup was straightforward, debugging the blank screen was a real reminder to check small syntax details — like exports. I'm proud of how reusable the component structure already feels, and I'm excited to build on this tomorrow.

---
