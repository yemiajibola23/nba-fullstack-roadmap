#!/bin/bash

# Prompt the user for input
read -p "Day number: " DAY
read -p "Task/Module: " TITLE
read -p "Category (Frontend, Backend, AI, Tooling): " AREA
read -p "Priority (High/Medium/Low): " EFFORT
read -p "Estimated time (hrs): " TIME_EST
read -p "Actual time (hrs): " TIME_ACT
read -p "Reflection summary: " REFLECTION
read -p "Tags (comma-separated): " TAGS
DATE=$(date +"%B %d, %Y")

# Format the markdown table row
ENTRY="| $DAY | $TITLE | $AREA | Completed | $EFFORT | $TIME_EST | $TIME_ACT | $REFLECTION | $TAGS | $DATE |"

# Append to PROGRESS.md in the docs folder
echo "$ENTRY" >> docs/PROGRESS.md

# Create reflection file
FILENAME="notes/day${DAY}-reflection.md"

cat <<EOF > $FILENAME
# 📓 Day $DAY Reflection

## 🗓️ Date
$DATE

## 🧠 Title
$TITLE

## 💡 What I Did
$REFLECTION

## ⏱️ Time
- Estimated: $TIME_EST hours
- Actual: $TIME_ACT hours

## 🏷️ Area
$AREA

## 🏷️ Tags
$TAGS
EOF

echo "✅ Day $DAY logged in docs/PROGRESS.md and $FILENAME created."
