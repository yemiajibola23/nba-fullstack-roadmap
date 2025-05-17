#!/bin/bash

# === Step 1: Auto-detect Day ===
PROGRESS_FILE="../docs/PROGRESS.md"
NOTES_DIR="../notes"
CURRICULUM_FILE="../docs/curriculum.md"
echo "$CURRICULUM_FILE"

LAST_DAY=$(tail -n +2 "$PROGRESS_FILE" | awk -F '|' '{ print $2 }' | grep -Eo '[0-9]+' | sort -n | tail -1)
DAY=$((LAST_DAY + 1))
DATE=$(date +"%B %d, %Y")

# Validate that DAY is a non-empty integer
if [ -z "$DAY" ] || ! [[ "$DAY" =~ ^[0-9]+$ ]]; then
  echo "❌ Error: DAY must be a non-empty integer."
  exit 1
fi

### ----- Prompt: Day Details -----
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

while [[ -z "$REFLECTION_LINK" ]]; do
  read -p "Link to Day $DAY Reflection in this format: [Day 9](notes/day9-reflection.md): " REFLECTION_LINK
done

while [[ -z "$TAGS" ]]; do
  read -p "Tags (comma-separated no spces): " TAGS
done

# === Step 3: Update Progress Table ===
if [ ! -f "$PROGRESS_FILE" ]; then
  mkdir -p "$(dirname $PROGRESS_FILE)"
  echo "# 🏀 Full Stack AI NBA Project – Progress Tracker" > "$PROGRESS_FILE"
  echo "" >> "$PROGRESS_FILE"
  echo "## 📅 Daily Progress" >> "$PROGRESS_FILE"
  echo "" >> "$PROGRESS_FILE"

### ----- Prompt: Day Details -----
  echo "| Day | Title | Status | Reflection |" >> "$PROGRESS_FILE"
  echo "| --- | ----- | ---- | ------ | ------ | ----------| --------- | ---------- | ---- | ---- |" >> "$PROGRESS_FILE"
fi

TABLE_ROW="| ${DAY} | ${TASK_MODULE} | ✅ Completed | ${REFLECTION_LINK} |"
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

# === Step 4: Update Notion ===
GITHUB_REFLECTION_LINK="https://github.com/yemiajibola23/nba-fullstack-roadmap/blob/main/$FILEPATH"

### ----- Step: Update Notion -----
python3 notion_update_refactored.py "$DAY" "$TASK_MODULE" "$CATEGORY" "Completed" "$PRIORITY" "$TIME_EST" "$TIME_ACT" "$GITHUB_REFLECTION_LINK" "$TAGS"

echo "Notion table updated."

# === Step 5: Update Curricuium ===
# Pad the day number to match table formatting (single space if < 10, double if >= 10)
if [ "$DAY" -lt 10 ]; then
  padded_day=" $DAY"
else
  padded_day="$DAY"
fi

if [ -z "$padded_day" ]; then
  echo "❌ Error: padded_day is empty — skipping curriculum update."
  exit 1
fi
### ----- Step: Update Curriculum File -----
sed -i '' -E "s|^\|[ ]*$padded_day[ ]*\|([^|]*\|){2}[ ]*[^|]*[ ]*\||| $padded_day | \1 ✅ Completed ||" "$CURRICULUM_FILE"