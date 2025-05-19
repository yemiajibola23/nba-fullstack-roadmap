# 📝 Day 19 Reflection – Pagination + Loading States

**Date:** May 19, 2025  
**Topic:** Pagination + Loading/Error UI  
**Status:** ✅ Completed

---

## What I Learned

Today I learned how to paginate a list of items in React using `useState` to track the current page and `Array.slice()` to render only a subset of players per page. I also implemented page navigation using Next/Previous buttons and clickable page dots. Beyond pagination, I improved the user experience by integrating loading and error states into the app, showing appropriate messages during data fetch operations and when something goes wrong.

## What I Built

- Paginated leaderboard view with dynamic page controls
- Loading message during async fetch from context
- Error fallback UI for fetch failures
- Centralized fetch logic inside `PlayerContext` to improve separation of concerns

## Challenges

I initially didn’t realize that `useEffect` for fetching players was handled in context, not inside the component. That led to confusion when trying to add loading/error logic. I also had to rename the context file from `.js` to `.jsx` due to a Vite JSX parsing error.

## Next Steps

- Add loading/error handling to add/delete operations
- Possibly refactor context into multiple files (actions, reducers)
- Begin integrating reusable hooks for clean logic
