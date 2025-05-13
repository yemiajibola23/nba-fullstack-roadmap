# 🏀 Day 5 Reflection — NBA Scoring Leaderboard App

## 🎯 Objective
Build a static frontend NBA scoring leaderboard using **HTML**, **CSS**, and **JavaScript** to practice DOM manipulation, layout, and interactivity — setting the stage for full stack and AI integrations.

---

## ✅ What I Built
- A clean, browser-based **NBA Scoring Leaderboard** displaying players sorted by total points.
- A **“Shuffle Rankings”** button to simulate real-time updates by reordering the list on demand.

---

## 🔧 Implementation Details

### 📄 `index.html`
- Created app structure with:
  - `<header>` containing the app title and shuffle button
  - `<ul id="leaderboard">` for dynamic player rendering
- Linked to external CSS and JS files

### 🎨 `style.css`
- Styled the UI for clarity and accessibility:
  - Centered layout
  - White card design for each leaderboard entry
  - Clean spacing and shadows using Flexbox

### 🧠 `script.js`
- Defined a static `players` array (name + points)
- Implemented `renderLeaderboard()` to populate the DOM
- Used ES6 template literals to format items (`${index + 1}. ${player.name}`)
- Implemented `shufflePlayers()` using `Array.sort()` with random comparator
- Attached a `click` event to the Shuffle button
- Clean use of modern JS (`const`, `forEach`, `sort`, arrow functions)

---

## 🧪 Tools & Best Practices
- ESLint (Airbnb style) + Prettier from Day 4 for linting and formatting
- Semantic HTML
- Scoped CSS
- Modular, readable JavaScript
- Used terminal enhancements (Oh My Zsh, plugins) to improve workflow

---

## 🧠 What I Learned
- How to dynamically update the DOM using vanilla JavaScript
- Importance of proper template string syntax (`${}` vs `$(...)`)
- Reinforced fundamental JavaScript methods (`sort`, `forEach`)
- Built confidence in creating interactive UIs with zero frameworks
- Understood the benefit of linters and formatters during active development

---

## 🚀 Next Up: Day 6
Ready to extend this into a full stack application by:
- Creating a **Node.js + Express backend**
- Serving leaderboard data via API
- Laying the foundation for AI features like projected stats and trends

---
