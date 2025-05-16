# 🛠️ Technical Debt & Deferred Ideas

This document tracks all features, enhancements, and refactors we’ve intentionally deferred for later. These items are part of the ongoing roadmap to improve architecture, code quality, and scalability.

---

## ✅ Backend / Frontend Code

- [ ] Prevent duplicate player submissions
- [ ] Abstract fetch logic into a reusable service layer
- [ ] Add test suite (unit + integration)
- [ ] Refactor validation into modular middleware/helpers
- [ ] Migrate from SQLite to a production-grade cloud DB
- [ ] Add frontend deduplication logic to leaderboard rendering

---

## ✅ Tooling / Developer Workflow

- [ ] Add periodic coding challenges
- [ ] Automate assessment tracking via CLI script or workflow
- [ ] Build out `/docs/` folder with:
  - [ ] API overview
  - [ ] Database schema (ERD or markdown)
  - [ ] Getting started instructions
  - [ ] Testing + deployment notes
- [ ] Update `README.md` with high-level architectural summaries
- [ ] Consider GitHub Actions to lint/refactor markdown files
- [ ] Automate or semi-automate updates to docs/curriculum.md after each day
- [ ] Integrate nodemon for automatic server starting/stopping

---

## ✅ Project Scope Ideas

- [ ] Add optimistic UI updates on player submission
- [ ] Create diagrams explaining form → API → DB → UI flow
- [ ] Add environment/settings config management
- [ ] Create mock interview questions from completed material
