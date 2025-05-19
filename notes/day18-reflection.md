📅 Day 18 Reflection – React Context State Management

🧠 What I Learned
Today I learned how to implement React Context to manage global state across components. I replaced local useState logic and prop drilling with a centralized PlayerContext that provides player data, add/delete functions, and user feedback. I also learned how to wrap the app in a provider and consume context using a custom hook usePlayerContext() for cleaner, more scalable architecture.

🔧 What I Built
Created a new PlayerContext.js with a provider, state, and shared functions
Refactored Leaderboard to use global context instead of local state
Cleaned up PlayerCard to trigger context-driven deletes
Styled the delete button with a reusable CSS class

🤔 Challenges
Initially, I left some redundant state mutation logic in Leaderboard after refactoring. I also forgot to reset the form after submission. Once I understood that the context handles these responsibilities, the code became much simpler and easier to manage.

🚀 Next Steps
Look into separating form logic into its own component (PlayerForm)
Use context to store loading/error states more explicitly
Prepare for Day 19: pagination and loading indicators

📈 Progress Snapshot
Refactored components to use centralized context
Improved component separation and architectural clarity
Added a custom hook for better developer experience