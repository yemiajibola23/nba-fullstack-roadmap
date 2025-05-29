# 🏀 Day 36 Reflection – Mobile Auth + AsyncStorage

**Date:** May 28, 2025

---

## 🌟 What I Accomplished

- Built a fully functional `LoginScreen` using React Native and TypeScript.
- Integrated the mobile app with the Express backend's `/api/login` route.
- Used `fetch` to send POST requests and handled response parsing.
- Installed and configured `@react-native-async-storage/async-storage`.
- Stored `userId` in local storage to simulate login persistence.
- Navigated to the next screen upon successful login.
- Resolved numerous bundler and TypeScript issues, including:
  - Invalid module resolutions
  - Broken import paths
  - React Navigation setup
  - Metro + ESM compatibility
  - Missing NavigationContainer crash
- Added tech debt item to eventually replace sessions with JWT.

---

## 🤔 What I Learned

- TypeScript in React Native is stricter and more fragile than expected, but worth it for better type safety.
- Expo and Metro bundler have strong opinions on ESM/CommonJS that can break projects if misconfigured.
- AsyncStorage must be given strings — undefined crashes the app.
- Real devices/simulators resolve `localhost` differently than expected — always use local IP.
- Debugging navigation and screen registration requires clean builds and clear component exports.

---

## 🧱 Challenges I Faced

- Took a while to diagnose the invalid element error — which was caused by an empty `App.tsx`.
- Had to completely reset my bundler and TypeScript config multiple times to eliminate ESM issues.
- Fought with network request failures due to mismatched IP.
- Logged into the backend successfully but forgot that I wasn’t sending a `token`, which caused AsyncStorage issues.

---

## ✅ What's Next

- Build out the `LeaderboardScreen` and wire it up to fetch and display data.
- Implement logout logic and route protection.
- Eventually replace session-based auth with a real JWT system.

---