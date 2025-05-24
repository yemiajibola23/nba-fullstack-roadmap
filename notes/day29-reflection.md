# 📝 Day 29 Reflection – Profile Page + Avatar Upload

**Date:** May 24, 2025

---

## ✅ What I Built

- Created a `/profile` page for updating username and uploading an avatar image.
- Built backend routes for `GET` and `POST /api/profile` with `multer` handling image uploads.
- Added file uploads to the `uploads/` folder and served them statically from the backend.
- Created `Profile.jsx` React component with a form to edit profile info and preview avatar.
- Integrated proper `credentials: "include"` handling for all session-protected fetch requests.

---

## 🧠 What I Learned

- How to use `multer` to handle `multipart/form-data` in Express.
- Why session cookies can fail to persist without `credentials: "include"` and proper proxy setup.
- That cookie/session bugs may appear after backend restarts unless session timing is accounted for.
- The importance of aligning session object structure across controllers.
- How `FormData` works in React when uploading files.
- The nuance of React rendering immediately after login before cookies settle.

---

## 🐛 Challenges

- Cookie-based session was not persisting due to Vite proxy config and missing credentials.
- Got a 401 after login due to frontend fetches firing before session cookies were ready.
- Encountered mismatch between `req.session.userId` and the updated `req.session.user` object.
- File upload paths and previews required proper static route serving and validation.
- Refresh fixed the session — but initial fetches failed unless the flow was timed properly.

---

## 🔧 Improvements for Later

- Fix bug where backend restart + immediate login results in 401 until refresh.
- Consider routing `Profile` conditionally or delaying fetch inside the component.
- Clean up file storage (e.g., delete old avatars on update).
- Add frontend login state indicator + loading spinner.

---

## 🔁 Carried Tech Debt

- ❗ Persistent 401 error post-login before reload (session timing issue)
- Needs more robust session verification + retry strategy

