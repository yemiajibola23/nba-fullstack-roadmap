| Day | Topic                                      | Description                                                                                                                  | Status       |
| --- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Setup GitHub + Structure                   | Created GitHub repo, `.gitignore`, and folders: `fullstack`, `ai`, `ios`                                                     | ✅ Completed |
| 2   | Setup Node.js + ESLint                     | Initialized Node project, installed ESLint (Airbnb base)                                                                     | ✅ Completed |
| 3   | Terminal + Dev Environment                 | Installed iTerm2, Oh My Zsh, CLI tools (`eza`, plugins), fixed Git prompt                                                    | ✅ Completed |
| 4   | Static Frontend Leaderboard                | Rendered hardcoded leaderboard with HTML/CSS                                                                                 | ✅ Completed |
| 5   | Lint Fix + ESLint Debugging                | Fixed ESLint `--fix` issue, verified config and formatting                                                                   | ✅ Completed |
| 6   | Backend Setup (GET)                        | Built Express server with `/api/players` GET route, served static JSON                                                       | ✅ Completed |
| 7   | Connect Frontend to API                    | Frontend now fetches and displays data from Express backend                                                                  | ✅ Completed |
| 8   | Add New Player (POST)                      | Added form to frontend and POST route to backend, saved to DB                                                                | ✅ Completed |
| 9   | Validation + Sync                          | Client/server validation, automatic re-fetch after submit                                                                    | ✅ Completed |
| 10  | Architecture + Docs                        | Created architecture diagram, reflection templates, and enhanced logging                                                     | ✅ Completed |
| 11  | Modularize Backend                         | Refactor backend into `routes/`, `controllers/`, and improve file structure                                                  | ✅ Completed |
| 12  | Delete Player (DELETE)                     | Add `DELETE` route + frontend button to remove players                                                                       | ✅ Completed |
| 13  | SQLite Model Layer                         | Abstract SQL logic into `models/`, prep for testing                                                                          | ✅ Completed |
| 14  | Testing API with Jest                      | Setup backend unit/integration testing with Jest                                                                             | ✅ Completed |
| 15  | React Setup (Vite + Component Scaffold)    | Initialize React project, connect to backend, scaffold leaderboard                                                           | ✅ Completed |
| 16  | React State + Hooks                        | Render players with `useState`, `useEffect`, and form handling                                                               | ✅ Completed |
| 17  | React Delete + Optimistic Update           | Wire delete action in React with `fetch` and state update                                                                    | ✅ Completed |
| 18  | State Management with Context              | Add global state for player list and user feedback using React Context                                                       | ✅ Completed |
| 19  | Pagination + Loading States                | Add pagination to leaderboard + loading/error indicators                                                                     | ✅ Completed |
| 20  | Day 20 Assessment + Tech Debt              | Quiz on React, frontend architecture, and route flow. Address TECH_DEBT.md                                                   | ✅ Completed |
| 21  | Player Insights Panel                      | Add expandable section to each player card with more detailed stats                                                          | ✅ Completed |
| 22  | SQLite: Foreign Keys + Joins               | Add related table (teams), use JOINs in backend routes and React display                                                     | ✅ Completed |
| 23  | Reusable React Components + Tailwind Setup | Extract `PlayerCard`, `PlayerForm`, and `Leaderboard` as reusable components. Install and configure TailwindCSS for styling. | ✅ Completed |
| 24  | Charting with Recharts + Tailwind Setup    | Visualize player scoring data with bar/line charts and apply utility-based styling with Tailwind                             | ✅ Completed |
| 25  | Day 25 Assessment + Frontend Reflection    | Reflect on React progress, quiz on context, hooks, and component structure                                                   | ✅ Completed |
| 26  | Auth System: Signup/Login                  | Build secure user login/signup with hashed passwords (bcrypt)                                                                | ✅ Completed |
| 27  | Auth Sessions + Middleware                 | Create session-based login using tokens/cookies and auth middleware                                                          | ✅ Completed |
| 28  | User-Specific Data                         | Filter data by current user (e.g. only show their saved players)                                                             | ✅ Completed |
| 29  | Profile Page + Avatar Upload               | Add profile settings page with file upload (avatar or profile details)                                                       | ✅ Completed |
| 30  | Day 30 Assessment + AI Preview             | Quiz on auth + sessions; prep for AI/ML integration into project                                                             | ✅ Completed |
| 31  | Intro to AI Integration                    | Define AI goals, install Python backend, set up `/ai` folder structure                                                       | ✅ Completed |
| 32  | REST API from Python (FastAPI)             | Create Python-based FastAPI server with test endpoint                                                                        | ✅ Completed |
| 33  | Link Node.js to Python API                 | Make async requests from Node backend to FastAPI for AI tasks                                                                | ✅ Completed |
| 34  | AI Dataset Planning + Format               | Decide input/output format for AI (e.g. player profiles, play styles)                                                        | ✅ Completed |
| 35  | Mobile Prep: React Native Setup            | Install Expo CLI, scaffold app, configure navigation                                                                         | ✅ Completed |
| 36  | Mobile Auth + Login Screen                 | Connect mobile app to backend auth, store token in local storage                                                             | ✅ Completed |
| 37  | Display Players (GET)                      | Fetch and display leaderboard players using FlatList                                                                         | ✅ Completed |
| 38  | Add New Player (POST) + Form UI            | Submit form data from mobile app to backend API                                                                              | ✅ Completed |
| 39  | Mobile Testing + Styling                   | Add basic component tests + polish layout (buttons, inputs, error states)                                                    | ✅ Completed |
| 40  | Day 40 Assessment + Tech Debt              | Evaluate ML pipeline + reconnect to roadmap, fix any full-stack issues                                                       | ✅ Completed |
| 41  | Balldontlie API: Seed Real Players         | Created modular `teams` and `nba_players` schemas, seeded Balldontlie teams + 100 players, validated FK integrity            | ✅ Completed |
| 42  | GET /nba_players route + Pagination        | Add API route for NBA players with pagination + filters. Extend seeding script to pull all players.                          | ✅ Completed |
| 43  | Display Real Stats on Leaderboard          | Show real players on leaderboard with key stats (e.g. points, team, position)                                                | ✅ Completed |
| 44  | Stat UI Polishing + Tests                  | Finalize player stat formatting on the leaderboard, add tooltips or labels, and write component-level tests for stat display | ⬜ Upcoming  |
| 45  | Mobile: Import Real Player                 | Add search/import on mobile using `nba_players` data (autocomplete or filter), render card with real stats                   | ⬜ Upcoming  |
| 46  | Supervised ML: Success Prediction          | Define features/labels for play success prediction (e.g. points, spacing, defender proximity)                                | ⬜ Upcoming  |
| 47  | Train Play Success Classifier              | Train supervised model (Logistic Regression, XGBoost, etc.), evaluate accuracy with metrics                                  | ⬜ Upcoming  |
| 48  | Predict from Uploaded Play Data            | Build endpoint to receive play data (JSON or CSV) and return success likelihood from model                                   | ⬜ Upcoming  |
| 49  | Frontend: Show Prediction Outcome          | Display play success likelihood visually in web/mobile UI (e.g. confidence score, visual tag)                                | ⬜ Upcoming  |
| 50  | Day 50 Assessment + Tech Debt              | Quiz on supervised learning + prediction pipeline. Address lingering AI integration bugs or model improvements               | ⬜ Upcoming  |
| 51  | BA Player Recommendation Engine            | Design recommendation logic based on play style and user interaction                                                         | ⬜ Upcoming  |
| 52  | Train Collaborative Filter Model           | Use simple user→player or play→player similarity (matrix or content-based)                                                   | ⬜ Upcoming  |
| 53  | Recommend Similar Players                  | Add endpoint: get related players based on viewing or tagging                                                                | ⬜ Upcoming  |
| 54  | Frontend: Rec Carousel Component           | Create UI to browse recommended players after selecting one                                                                  | ⬜ Upcoming  |
| 55  | Day 55 Assessment + Architecture Review    | Deep dive quiz + AI system diagram + reflection                                                                              | ⬜ Upcoming  |
| 56  | Feature: Save + Rate Plays                 | Let users rate and save plays (used later for training personalized models)                                                  | ⬜ Upcoming  |
| 57  | Build Play-Based Preference Model          | Use play ratings to fine-tune recommendations for user                                                                       | ⬜ Upcoming  |
| 58  | User Dashboard: Stats + Insights           | Display user metrics: time spent, accuracy of predictions, saved content                                                     | ⬜ Upcoming  |
| 59  | Add Logging + Monitoring for AI            | Add structured logging for ML endpoints + basic metrics                                                                      | ⬜ Upcoming  |
| 60  | Day 60 Assessment + AI Milestone           | Quiz on full AI system. Document entire ML integration journey                                                               | ⬜ Upcoming  |
| 61  | Integrate AI: Clustered Player Display     | Fetch clustered player groups from API and display them in the app                                                           | ⬜ Upcoming  |
| 62  | Display Predictions for Uploaded Data      | Upload JSON or fetch results, show predicted outcome on mobile                                                               | ⬜ Upcoming  |
| 63  | Recommendation Carousel                    | Show recommended players via horizontal scroll component                                                                     | ⬜ Upcoming  |
| 64  | Mobile State + Auth Persistence            | Add persistent login, global auth state, and loading indicators                                                              | ⬜ Upcoming  |
| 65  | Mobile Quiz + Reflection Uploader          | Add in-app quiz view + submit reflection text to backend                                                                     | ⬜ Upcoming  |
| 66  | Refactor Shared Logic                      | Extract common data fetch logic into reusable hooks or services                                                              | ⬜ Upcoming  |
| 67  | Add Ratings + Feedback System              | Let users rate players, submit feedback for clustering                                                                       | ⬜ Upcoming  |
| 68  | Profile + Insights Dashboard               | Show saved players, rating history, time spent, and AI stats                                                                 | ⬜ Upcoming  |
| 69  | Offline Support + UX Polish                | Cache last viewed players, improve error handling, responsive design                                                         | ⬜ Upcoming  |
| 70  | Day 70 Assessment + App Store Plan         | Full mobile quiz, roadmap to publishing (if desired), summarize AI usage                                                     | ⬜ Upcoming  |
| 71  | Dark Mode + Search                         | Add dark/light theme toggle with persistence + live search bar for players                                                   | ⬜ Upcoming  |
| 72  | Navbar + Sortable Leaderboard              | Add top nav with React Router and enable stat-based sorting on leaderboard                                                   | ⬜ Upcoming  |
| 73  | Animation + Player Tagging                 | Add Framer Motion animations + tagging system for custom labels                                                              | ⬜ Upcoming  |
| 74  | Accessibility + Favorites                  | Add ARIA roles and keyboard nav + ability to favorite players                                                                | ⬜ Upcoming  |
| 75  | Radar Charts + Player Groups               | Add interactive radar charts and allow grouping players into custom lists                                                    | ⬜ Upcoming  |
| 76  | UI Library + Notes                         | Introduce Tailwind UI or shadcn/ui + add per-player notes/comments feature                                                   | ⬜ Upcoming  |
| 77  | UX Polish + Comparison Tool                | Enhance UI feedback for interactions + build player comparison view                                                          | ⬜ Upcoming  |
| 78  | Frontend Tests + Export/Import Lists       | Write tests for components using React Testing Library + support for CSV/JSON player exports                                 | ⬜ Upcoming  |
| 79  | Undo/Redo + UX Pass                        | Add undo functionality for actions + audit and polish visual and interaction details                                         | ⬜ Upcoming  |
| 80  | Final Showcase + Reflection                | Present enhanced app features and UI in final capstone + write UI/UX reflection                                              | ⬜ Upcoming  |
