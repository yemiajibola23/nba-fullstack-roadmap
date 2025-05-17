#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# === Step 1: Auto-detect Day ===
PROGRESS_FILE="$SCRIPT_DIR/../docs/PROGRESS.md"
CURRICULUM_FILE="$SCRIPT_DIR/../docs/curriculum.md"
NOTES_DIR="$SCRIPT_DIR/../notes"

LAST_DAY=$(tail -n +2 "$PROGRESS_FILE" | awk -F '|' '{ print $2 }' | grep -Eo '[0-9]+' | sort -n | tail -1)
DAY=$((LAST_DAY + 1))
DATE=$(date +"%B %d, %Y")

# Validate that DAY is a non-empty integer
if [ -z "$DAY" ] || ! [[ "$DAY" =~ ^[0-9]+$ ]]; then
  echo "❌ Error: DAY must be a non-empty integer."
  exit 1
fi
REFLECTION_FILEPATH="notes/day${DAY}-reflection.md"
REFLECTION_LINK="[Day ${DAY}](${REFLECTION_FILEPATH})"
GITHUB_REFLECTION_LINK="https://github.com/yemiajibola23/nba-fullstack-roadmap/blob/main/$REFLECTION_FILEPATH"


### ----- Prompt: Day Details -----
echo "📅 Logging Day $DAY"

# === Step 2: Prompt + Validation ===
while [[ -z "$TASK_MODULE" ]]; do
  read -p "Task/Module (required): " TASK_MODULE
done

while [[ -z "$CATEGORY" ]]; do
  read -p "Category (Frontend, Backend, AI, Tooling, Planning, DevOps, NBA-specific): " CATEGORY
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

while [[ -z "$TAGS" ]]; do
  read -p "Tags (comma-separated, no spaces): " TAGS
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
echo "| --- | ----- | ------ | ---------- |" >> "$PROGRESS_FILE"
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
if ! [ -f "$SCRIPT_DIR/notion_update.py" ]; then
  echo "❌ Error: notion_update.py not found in script directory."
  exit 1
fi

python3 notion_update.py "$DAY" "$TASK_MODULE" "$CATEGORY" "Completed" "$PRIORITY" "$TIME_EST" "$TIME_ACT" "$GITHUB_REFLECTION_LINK" "$TAGS"

echo "Notion table updated."

# === Step 5: Update Curriculum ===
TMP_CURRICULUM=$(mktemp)
awk -v day="$DAY" '
BEGIN { FS=OFS="|" }
NR <= 2 { print; next }
{
  day_num = $2
  gsub(/^ +| +$/, "", day_num)
  if (day_num == day) {
    $5 = "✅ Completed"
  }
  print
}' "${CURRICULUM_FILE}" > "$TMP_CURRICULUM" && mv "$TMP_CURRICULUM" "${CURRICULUM_FILE}"

echo "🎉 Day $DAY successfully logged!"