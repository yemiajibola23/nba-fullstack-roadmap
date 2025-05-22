# 📅 Day 26 Reflection – Auth System: Signup & Login

## ✅ What I Built

Today, I implemented a complete user authentication system using secure password hashing and login validation.

- Created a `users` table in SQLite to store username/password pairs.
- Used `bcrypt` to hash passwords on signup and verify them on login.
- Built an Express controller layer to handle `/api/signup` and `/api/login`.
- Verified backend logic with `curl` and debugged `bcrypt.compare` mismatches.
- Built a React `AuthForm` component to handle signup/login from the UI.
- Managed async fetch flows with `await`, and handled error/success states.
- Confirmed the entire stack works end-to-end for user auth.

## 🧠 What I Learned

- The difference between `.exec()` vs `.prepare().run()` in `better-sqlite3`
- Why `bcrypt.compare()` must be awaited — and what happens when it's not
- That even if you “see” two strings printed the same, the hash might not be what you expect
- How to debug login logic by inspecting the stored password and comparing hash behavior
- How to use `useState` and `fetch` in a controlled form submission flow

## 🔁 What I’d Like to Improve

- Add session/token-based login flow
- Display username globally after login success
- Explore persistent auth via cookies or local storage

## 🚀 Next Steps

- Add session/token support (coming Day 27)
- Hide AuthForm when user is logged in
- Store current user in global state
