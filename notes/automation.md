# 🧠 Reflection & Progress Automation

This document explains how daily progress in the NBA Full Stack Curriculum is automated using shell and Python scripts. The workflow updates:

- ✅ Daily reflection (saved to `notes/dayX-reflection.md`)
- ✅ `PROGRESS.md` tracker table
- ✅ Notion database (via API)

---

## 🚀 Overview

When you run:

```bash
./log_day.sh <day> "<title>" <optional-reflection-file>
```

It:
1. Saves the reflection content to a markdown file
2. Updates your `PROGRESS.md` markdown table
3. Pushes a new row to your linked Notion progress tracker

---

## 🛠 Setup Instructions

### 1. Clone the repo and ensure this structure:

```
nba-fullstack-roadmap/
├── log_day.sh
├── notion_update.py
├── PROGRESS.md
├── notes/
├── .env              # (secret file – not tracked)
└── docs/automation.md
```

### 2. Install Python Dependencies

```bash
pip3 install requests python-dotenv
```

### 3. Set Up `.env` (Do not commit this!)

Create a `.env` file in your project root:

```env
NOTION_API_KEY=secret_your_notion_integration_secret
NOTION_DATABASE_ID=your_notion_database_id
```

---

## 🧪 How to Use

### Option A: With a reflection file

```bash
./log_day.sh 10 "Working with APIs" day10-text.md
```

### Option B: With no file (uses a default template)

```bash
./log_day.sh 11 "Exploring SQL Joins"
```

---

## ✅ Output

- `notes/day10-reflection.md` created
- `PROGRESS.md` updated with a new table row
- New row added to your Notion progress tracker

---

## 🔐 Notes on Security

- `.env` is excluded from Git via `.gitignore`
- Do not share or commit your Notion API key

---

## 🧩 Optional Extensions

### Git Push Wrapper

You can create a custom script to run this after pushing to `main`:

```bash
#!/bin/bash
git push origin main && ./log_day.sh "$@"
```

### GitHub Actions (Future Option)

For CI-based automation after pushes to `main`.

---

## 📌 Recommended Commit Practices

```bash
git add log_day.sh notion_update.py PROGRESS.md
git commit -m "Automate reflection logging and Notion sync"
```

Use `.gitignore` to exclude:

```gitignore
.env
__pycache__/
notes/*.md
```

---

## 🧠 Maintainer Notes

- Make sure reflection formatting is valid Markdown
- Notion expects column types: Day (number), Title (title), Status (select), Reflection (url)
- Feel free to expand the script to handle updates or more metadata
