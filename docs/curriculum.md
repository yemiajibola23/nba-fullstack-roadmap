# 🏀 Full Stack AI NBA Curriculum

This document tracks the structured day-by-day roadmap for building a full stack AI-powered NBA project.

---

## 📚 Curriculum Overview

| Day | Topic                                   | Description                                                                 | Status         |
| --- | --------------------------------------- | --------------------------------------------------------------------------- | -------------- |
| 1   | Setup GitHub + Structure                | Created GitHub repo, `.gitignore`, and folders: `fullstack`, `ai`, `ios`    | ✅ Completed   |
| 2   | Setup Node.js + ESLint                  | Initialized Node project, installed ESLint (Airbnb base)                    | ✅ Completed   |
| 3   | Terminal + Dev Environment              | Installed iTerm2, Oh My Zsh, CLI tools (`eza`, plugins), fixed Git prompt   | ✅ Completed   |
| 4   | Static Frontend Leaderboard             | Rendered hardcoded leaderboard with HTML/CSS                                | ✅ Completed   |
| 5   | Lint Fix + ESLint Debugging             | Fixed ESLint `--fix` issue, verified config and formatting                  | ✅ Completed   |
| 6   | Backend Setup (GET)                     | Built Express server with `/api/players` GET route, served static JSON      | ✅ Completed   |
| 7   | Connect Frontend to API                 | Frontend now fetches and displays data from Express backend                 | ✅ Completed   |
| 8   | Add New Player (POST)                   | Added form to frontend and POST route to backend, saved to DB               | ✅ Completed   |
| 9   | Validation + Sync                       | Client/server validation, automatic re-fetch after submit                   | ✅ Completed   |
| 10  | Architecture + Docs                     | Created architecture diagram, reflection templates, and enhanced logging    | ✅ Completed   |
| 11  | Modularize Backend                      | Refactor backend into `routes/`, `controllers/`, and improve file structure | 🔄 In Progress |
| 12  | Delete Player (DELETE)                  | Add `DELETE` route + frontend button to remove players                      | ⬜ Upcoming    |
| 13  | SQLite Model Layer                      | Abstract SQL logic into `models/`, prep for testing                         | ⬜ Upcoming    |
| 14  | Testing API with Jest                   | Setup backend unit/integration testing with Jest                            | ⬜ Upcoming    |
| 15  | Build Frontend with Vite + React        | Scaffold Vite app, connect to API, recreate leaderboard UI                  | ⬜ Upcoming    |
| 16  | Advanced Vite Setup                     | Add Tailwind CSS, component structure, and initial routing                  | ⬜ Upcoming    |
| 17  | React Form Hooks + Validation           | Build forms with controlled inputs, validation, and submission logic        | ⬜ Upcoming    |
| 18  | State Management with Context           | Add global state to manage player list and user feedback                    | ⬜ Upcoming    |
| 19  | Pagination + Loading States             | Implement frontend pagination + loading indicators for player data          | ⬜ Upcoming    |
| 20  | Day 20 Assessment + Tech Debt           | Quiz on React, Vite, backend routes + address items in `TECH_DEBT.md`       | ⬜ Upcoming    |
| 21  | Add Player Stats View                   | Show detailed player stats using React props and conditional rendering      | ⬜ Upcoming    |
| 22  | SQLite: Foreign Keys + Joins            | Add new table (e.g. teams), show JOINs in backend routes                    | ⬜ Upcoming    |
| 23  | Reusable React Components               | Break UI into components: `PlayerCard`, `TeamSelector`, etc.                | ⬜ Upcoming    |
| 24  | Setup Charting with Chart.js            | Display player points/rebounds visually using charts                        | ⬜ Upcoming    |
| 25  | Day 25 Assessment + Tech Debt           | Quiz on frontend React + backend data models. Tech debt round-up            | ⬜ Upcoming    |
| 26  | Auth System: Signup/Login               | Build secure user login/signup with hashed passwords (bcrypt)               | ⬜ Upcoming    |
| 27  | Auth Sessions + Middleware              | Create session-based login using tokens/cookies and auth middleware         | ⬜ Upcoming    |
| 28  | User-Specific Data                      | Filter data by current user (e.g. only show their saved players)            | ⬜ Upcoming    |
| 29  | Profile Page + Avatar Upload            | Add profile settings page with file upload (avatar or profile details)      | ⬜ Upcoming    |
| 30  | Day 30 Assessment + AI Preview          | Quiz on auth + sessions; prep for AI/ML integration into project            | ⬜ Upcoming    |
| 31  | Intro to AI Integration                 | Define AI goals, install Python backend, set up `/ai` folder structure      | ⬜ Upcoming    |
| 32  | REST API from Python (FastAPI)          | Create Python-based FastAPI server with test endpoint                       | ⬜ Upcoming    |
| 33  | Link Node.js to Python API              | Make async requests from Node backend to FastAPI for AI tasks               | ⬜ Upcoming    |
| 34  | AI Dataset Planning + Format            | Decide input/output format for AI (e.g. player profiles, play styles)       | ⬜ Upcoming    |
| 35  | Mobile Prep: React Native Setup         | Install Expo CLI, scaffold app, configure navigation                        | ⬜ Upcoming    |
| 36  | Mobile Auth + Login Screen              | Connect mobile app to backend auth, store token in local storage            | ⬜ Upcoming    |
| 37  | Display Players (GET)                   | Fetch and display leaderboard players using FlatList                        | ⬜ Upcoming    |
| 38  | Add New Player (POST) + Form UI         | Submit form data from mobile app to backend API                             | ⬜ Upcoming    |
| 39  | Mobile Testing + Styling                | Add basic component tests + polish layout (buttons, inputs, error states)   | ⬜ Upcoming    |
| 40  | Day 40 Assessment + Tech Debt           | Evaluate ML pipeline + reconnect to roadmap, fix any full-stack issues      | ⬜ Upcoming    |
| 41  | Visualize AI Output (Frontend)          | Show clustered player groups using color-coded charts or grouped cards      | ⬜ Upcoming    |
| 42  | Upload Player CSV + Infer Cluster       | Upload a CSV of player stats and classify each via AI API                   | ⬜ Upcoming    |
| 43  | Document AI Module (README + Code)      | Add markdown documentation, schema diagrams, and inline code comments       | ⬜ Upcoming    |
| 44  | User Feedback Loop for AI               | Allow users to label clusters or correct classifications                    | ⬜ Upcoming    |
| 45  | Day 45 Assessment + AI Tech Debt        | Quiz on clustering + AI infra. Clean up, refactor, and document issues      | ⬜ Upcoming    |
| 46  | Supervised ML: Success Prediction       | Define features + labels for predicting play success                        | ⬜ Upcoming    |
| 47  | Train Play Success Classifier           | Build and evaluate supervised model (e.g. Logistic Regression, XGBoost)     | ⬜ Upcoming    |
| 48  | Predict from Uploaded Play Data         | Create API route to upload play data and return success likelihood          | ⬜ Upcoming    |
| 49  | Frontend: Show Prediction Outcome       | Display success probability for uploaded play in UI                         | ⬜ Upcoming    |
| 50  | Day 50 Assessment + Tech Debt           | Quiz on supervised learning and model evaluation. Clear ML-related backlog  | ⬜ Upcoming    |
| 51  | NBA Player Recommendation Engine        | Design recommendation logic based on play style and user interaction        | ⬜ Upcoming    |
| 52  | Train Collaborative Filter Model        | Use simple user→player or play→player similarity (matrix or content-based)  | ⬜ Upcoming    |
| 53  | Recommend Similar Players               | Add endpoint: get related players based on viewing or tagging               | ⬜ Upcoming    |
| 54  | Frontend: Rec Carousel Component        | Create UI to browse recommended players after selecting one                 | ⬜ Upcoming    |
| 55  | Day 55 Assessment + Architecture Review | Deep dive quiz + AI system diagram + reflection                             | ⬜ Upcoming    |
| 56  | Feature: Save + Rate Plays              | Let users rate and save plays (used later for training personalized models) | ⬜ Upcoming    |
| 57  | Build Play-Based Preference Model       | Use play ratings to fine-tune recommendations for user                      | ⬜ Upcoming    |
| 58  | User Dashboard: Stats + Insights        | Display user metrics: time spent, accuracy of predictions, saved content    | ⬜ Upcoming    |
| 59  | Add Logging + Monitoring for AI         | Add structured logging for ML endpoints + basic metrics                     | ⬜ Upcoming    |
| 60  | Day 60 Assessment + AI Milestone        | Quiz on full AI system. Document entire ML integration journey              | ⬜ Upcoming    |
| 61  | Integrate AI: Clustered Player Display  | Fetch clustered player groups from API and display them in the app          | ⬜ Upcoming    |
| 62  | Display Predictions for Uploaded Data   | Upload JSON or fetch results, show predicted outcome on mobile              | ⬜ Upcoming    |
| 63  | Recommendation Carousel                 | Show recommended players via horizontal scroll component                    | ⬜ Upcoming    |
| 64  | Mobile State + Auth Persistence         | Add persistent login, global auth state, and loading indicators             | ⬜ Upcoming    |
| 65  | Mobile Quiz + Reflection Uploader       | Add in-app quiz view + submit reflection text to backend                    | ⬜ Upcoming    |
| 66  | Refactor Shared Logic                   | Extract common data fetch logic into reusable hooks or services             | ⬜ Upcoming    |
| 67  | Add Ratings + Feedback System           | Let users rate players, submit feedback for clustering                      | ⬜ Upcoming    |
| 68  | Profile + Insights Dashboard            | Show saved players, rating history, time spent, and AI stats                | ⬜ Upcoming    |
| 69  | Offline Support + UX Polish             | Cache last viewed players, improve error handling, responsive design        | ⬜ Upcoming    |
| 70  | Day 70 Assessment + App Store Plan      | Full mobile quiz, roadmap to publishing (if desired), summarize AI usage    | ⬜ Upcoming    |

---

### ✅ Notes

- Reflections for each day are stored in [`/notes`](../notes)
- Architecture diagrams stored in [`/docs`](.)
- Progress tracked in [`PROGRESS.md`](./PROGRESS.md)
- Assessment tracking and automation in progress
