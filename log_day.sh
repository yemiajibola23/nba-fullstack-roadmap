#!/bin/bash

DAY_NUMBER=$1
DAY_TITLE=$2

# Format: day10-reflection.md
FILENAME="day${DAY_NUMBER}-reflection.md"
FILEPATH="notes/${FILENAME}"
PROGRESS_FILE="docs/PROGRESS.md"

# Create notes directory if it doesn't exist
mkdir -p notes

# Optional: Reflection file as third argument
# === STEP 3: Handle reflection input ===
REFLECTION_INPUT=$3
REFLECTION=""

# If a third argument was passed and it’s a file, use its contents
if [ -n "$REFLECTION_INPUT" ] && [ -f "$REFLECTION_INPUT" ]; then
    REFLECTION=$(cat "$REFLECTION_INPUT")
# If the third argument was a string and not a file path, use it directly
elif [ -n "$REFLECTION_INPUT" ]; then
    REFLECTION="$REFLECTION_INPUT"
# Otherwise, use a default reflection template
else
    read -r -d '' REFLECTION << EOM
# Day ${DAY_NUMBER}: ${DAY_TITLE}

## What I Learned  
(TODO: Insert daily summary here)

## What I Built  
(TODO: Describe what you implemented)

## Challenges  
(TODO: List bugs or blockers)

## Next Steps  
(TODO: What’s next?)
EOM
fi

# Write to file
echo "$REFLECTION" > "$FILEPATH"
echo "Reflection saved to $FILEPATH"

# Step 2: Append to PROGRESS.md
PROGRESS_LINE="- **Day ${DAY_NUMBER}:** [${DAY_TITLE}](${FILEPATH}) ✅"

## Check if PROGRESS.md existed, if not create it
if [ ! -f "$PROGRESS_FILE" ]; then
    echo "# 🏀 Full Stack AI NBA Project – Progress Tracker" > "$PROGRESS_FILE"
    echo "" >> "$PROGRESS_FILE"
    echo "## 📅 Daily Progress" >> "$PROGRESS_FILE"
    echo "" >> "$PROGRESS_FILE"
    echo "| Day | Title | Status | Reflection |" >> "$PROGRESS_FILE"
    echo "| --- | ----- | ------ | ----------- |" >> "$PROGRESS_FILE"
fi

# Format new table row
TABLE_ROW="| ${DAY_NUMBER}  | ${DAY_TITLE} | ✅ Completed | [Day ${DAY_NUMBER}](notes/day${DAY_NUMBER}-reflection.md) |"

# Insert after the last row of the table
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

# === STEP 5: Update Notion ===

# Format GitHub link to reflection (you can adjust to your repo URL)
GITHUB_REFLECTION_LINK="https://github.com/yemiajibola23/nba-fullstack-roadmap/blob/main/$FILEPATH"

# Call the Python script to update Notion
python3 notion_update.py "$DAY_NUMBER" "$DAY_TITLE" "$GITHUB_REFLECTION_LINK"