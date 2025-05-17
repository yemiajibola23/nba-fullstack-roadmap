# 🧠 Day 14 Reflection – Testing API with Jest

**Date:** May 17, 2025  
**Topic:** Backend API Testing with Jest & Supertest  
**Estimated Time:** 2–3 hours  
**Actual Time:** 2 hours

---

## ✅ What I Accomplished

- Installed and configured `jest` and `supertest` for backend testing.
- Wrote integration tests for the `GET`, `POST`, and `DELETE /api/players` routes.
- Used `supertest` to simulate HTTP requests and validate responses.
- Created a separate test database (`nba.test.db`) to isolate test state.
- Implemented test lifecycle hooks (`beforeEach`, `afterAll`) to ensure a clean environment.
- Added a quiz log and assessments tracker to the daily workflow.

---

## 🧠 What I Learned

- How to write integration tests that exercise the full Express stack (routes → controllers → DB).
- The importance of cleaning test data between runs to prevent flaky tests.
- How to structure test directories and separate concerns (unit vs integration).
- Debugging tips like watching for invalid URLs or closed DB connections.

---

## 🧩 Challenges

- Accidentally closed the DB too early with `afterEach()`, which caused future tests to fail.
- Jest tried to run `db/test.js` as a test suite — renamed/ignored it appropriately.
- Debugged `supertest` URL issues related to missing slashes.

---

## 🔁 Next Steps

- Consider adding tests for edge cases (missing fields, invalid input, 404 responses).
- Add coverage reporting and track test metrics in CI.
- Refactor DB test setup into a shared utility or testing harness file.

---

## 🔗 Links

- [Day 14 Quiz](../quizzes/day14-quiz.md)
- [Day 14 Branch](https://github.com/yemiajibola23/nba-fullstack-roadmap/tree/day14-jest-api-tests)

---

## 📓 Final Thoughts

Testing is no longer just a nice-to-have — it’s a critical part of confidence and code quality. Integrating Jest and Supertest made me feel like I’m building something reliable. I’m starting to think like a full stack engineer who ships with coverage in mind.
