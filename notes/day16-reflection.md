# 📅 Day 16 – React State + Hooks

## ✅ What I Learned

Today I built a dynamic, interactive version of the NBA leaderboard using React hooks. I learned how to use `useState` to manage form input and fetched data, and how `useEffect` lets me run side effects like loading data on component mount. I also learned how to build controlled form inputs, which reflect the component’s state and update in real-time as the user types.

I reinforced how all HTML input values — even `type="number"` — are strings by default, and I practiced converting them to proper types (like using `parseInt`) before submission.

## 🚧 Challenges

I found it challenging at first to understand how `useState` works, especially why numbers are stored as strings from inputs. Breaking things into smaller parts helped me grasp the connection between form inputs and state. Asking for explanations in tiny chunks made a big difference.

## 🚀 What I Built

- Rendered a dynamic leaderboard from backend data
- Created a controlled form with `name` and `points` fields
- Submitted new players to the backend and updated local state
- Reset form after successful submission

## 🧠 Key Takeaways

- `useState` allows React components to "remember" values between renders
- `useEffect(..., [])` only runs once on component mount
- Controlled inputs require both `value` and `onChange` props
- Forms return string values — conversion is needed before use

## 🔍 Next Steps

Tomorrow I’ll wire up player deletion in the React app and apply optimistic UI updates so players are removed immediately from the leaderboard when deleted.
