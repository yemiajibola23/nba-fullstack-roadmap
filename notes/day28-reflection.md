# 📝 Day 28 Reflection – May 22, 2025

Today I implemented full user scoping and session-based personalization in the NBA leaderboard app.

### ✅ What I accomplished:

- Filtered player data by `req.session.userId` on the backend
- Joined `players` with `teams` to include `team_name` in responses
- Created a dropdown UI for team selection when adding a player
- Ensured that only the current user’s players appear in the list and chart
- Implemented `/api/me` to persist session state after page refresh
- Fixed tricky cookie/session issues with CORS, Express config, and fetch credentials
- Seeded users, teams, and players with proper `user_id` associations

### 🧠 What I learned:

- How `credentials: "include"` interacts with CORS and Express sessions
- How to use SQL JOINs effectively with scoped data
- How to maintain session persistence across page reloads
- Importance of matching backend response shapes to frontend expectations
- Debugging subtle auth/session bugs across the full stack

### 🛠️ Challenges I faced:

- Players not showing up due to mismatched `user_id` values
- Refresh resetting login despite valid session cookie
- Chart and UI desyncing after backend JOIN changes

### 🧭 Next Steps:

- Add ability to update or edit players
- Split team logic into its own controller (MVC cleanup)
- Add optimistic UI for better feedback
- Add player stats beyond points (rebounds, assists, etc.)
