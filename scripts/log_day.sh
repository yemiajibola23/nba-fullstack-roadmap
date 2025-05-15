#!/bin/bash

# === Step 1: Auto-detect Day ===
PROGRESS_FILE="docs/PROGRESS.md"
NOTES_DIR="notes"

LAST_DAY=$(tail -n +2 "$PROGRESS_FILE" | awk -F '|' '{ print $2 }' | grep -Eo '[0-9]+' | sort -n | tail -1)
DAY=$((LAST_DAY + 1))
DATE=$(date +"%B %d, %Y")
echo "📅 Logging Day $DAY"

# === Step 2: Prompt + Validation ===
while [[ -z "$TASK_MODULE" ]]; do
  read -p "Task/Module (required): " TASK_MODULE
done

while [[ -z "$CATEGORY" ]]; do
  read -p "Category (Frontend, Backend, AI, Tooling): " CATEGORY
done

while [[ -z "$PRIORITY" ]]; do
  read -p "Priority (High/Medium/Low): " PRIORITY
done

while [[ -z "$TIME_EST" ]]; do
  read -p "Estimated time (hrs): " TIME_EST
done

while [[ -z "$TIME_ACT" ]]; do
  read -p "Actual time (hrs): " TIME_ACT
done

while [[ -z "$REFLECTION_SUMMARY" ]]; do
  read -p "Reflection Summary (1-line for table): " REFLECTION_SUMMARY
done

while [[ -z "$TAGS" ]]; do
  read -p "Tags (comma-separated): " TAGS
done

# === Step 3: Update Progress Table ===
if [ ! -f "$PROGRESS_FILE" ]; then
  mkdir -p "$(dirname $PROGRESS_FILE)"
  echo "# 🏀 Full Stack AI NBA Project – Progress Tracker" > "$PROGRESS_FILE"
  echo "" >> "$PROGRESS_FILE"
  echo "## 📅 Daily Progress" >> "$PROGRESS_FILE"
  echo "" >> "$PROGRESS_FILE"
  echo "| Day | Title | Area | Status | Effort | Est (hrs) | Act (hrs) | Reflection | Tags | Date |" >> "$PROGRESS_FILE"
  echo "| --- | ----- | ---- | ------ | ------ | ----------| --------- | ---------- | ---- | ---- |" >> "$PROGRESS_FILE"
fi

TABLE_ROW="| ${DAY} | ${TASK_MODULE} | ${CATEGORY} | Completed | ${PRIORITY} | ${TIME_EST} | ${TIME_ACT} | ${REFLECTION_SUMMARY} | ${TAGS} | ${DATE} |"
TMP_FILE=$(mktemp)

awk -v row="$TABLE_ROW" '
    BEGIN { inserted = 0 }
    /^\|/ {
        last_table_line = NR
    }
    {
        lines[NR] = $0
    }
    END {
        for (i = 1; i <= NR; i++) {
            print lines[i]
            if (i == last_table_line && !inserted) {
                print row
                inserted = 1
            }
        }
    }
' "$PROGRESS_FILE" > "$TMP_FILE"

mv "$TMP_FILE" "$PROGRESS_FILE"
echo "✅ Progress table updated in $PROGRESS_FILE"

# === Step 4: Create Reflection Markdown File ===
mkdir -p "$NOTES_DIR"
FILENAME="day${DAY}-reflection.md"
FILEPATH="${NOTES_DIR}/${FILENAME}"

read -p "📸 Include architecture diagram section? (y/n): " INCLUDE_DIAGRAM

cat <<EOF > "$FILEPATH"
# 📓 Day ${DAY}: ${TASK_MODULE}

## 📆 Date
${DATE}

## 🧩 Task/Module
${TASK_MODULE}

## 🧠 Category
${CATEGORY}

## 🔥 Priority
${PRIORITY}

## ⏱️ Time
- Estimated: ${TIME_EST} hours
- Actual: ${TIME_ACT} hours

## 📝 Reflection Summary
${REFLECTION_SUMMARY}

## 🏷️ Tags
${TAGS}

## 📌 Detailed Reflection

### ✅ What I Accomplished
(TODO: Insert accomplishments here)

### 🧠 What I Learned
(TODO: Insert daily summary here)

### 🔨 What I Built
(TODO: Describe what you implemented)

### 🧩 Challenges
(TODO: List bugs or blockers)

### 🚀 Next Steps
(TODO: What’s next?)
EOF

if [[ "$INCLUDE_DIAGRAM" =~ ^[Yy]$ ]]; then
  cat <<EOF >> "$FILEPATH"

## 📸 Visual Architecture

Here's a snapshot of the app structure as of Day ${DAY}:

![Architecture Diagram](../docs/architecture-day${DAY}.png)
EOF
fi

echo "📝 Reflection saved to $FILEPATH"

# === Step 5: Update Notion (Optional) ===
GITHUB_REFLECTION_LINK="https://github.com/yemiajibola23/nba-fullstack-roadmap/blob/main/$FILEPATH"
python3 notion_update.py "$DAY" "$TASK_MODULE" "$GITHUB_REFLECTION_LINK"
