
import os
import sys
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

NOTION_TOKEN = os.getenv("NOTION_API_KEY")
DATABASE_ID = os.getenv("NOTION_DATABASE_ID")

headers = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28"
}

# Get command line arguments
try:
    day = int(sys.argv[1])
    title = sys.argv[2]
    category = sys.argv[3]
    status = sys.argv[4]
    priority = sys.argv[5]
    estimated_time = float(sys.argv[6])
    actual_time = float(sys.argv[7])
    reflection_url = sys.argv[8]
    tags = sys.argv[9] if len(sys.argv) > 9 else ""
except (IndexError, ValueError) as e:
    print(f"❌ Error parsing arguments: {e}")
    sys.exit(1)

# Convert tags into Notion multi-select format
tag_list = [tag.strip() for tag in tags.split(",") if tag.strip()]
multi_select_tags = [{"name": tag} for tag in tag_list]

# Define your properties and handle common Notion schema mismatches
properties = {
    "Day #": {
        "number": day
    },
    "Task/Module": {
        "title": [
            {
                "text": {
                    "content": title
                }
            }
        ]
    },
    "Category": {
        "select": {
            "name": category
        }
    },
    "Status": {
        "select": {
            "name": status
        }
    },
    "Priority": {
        "select": {
            "name": priority
        }
    },
    "Time Estimate (hrs)": {
        "number": estimated_time
    },
    "Actual Time (hrs)": {
        "number": actual_time
    },
    "Reflection": {
        "url": reflection_url
    }
}

# Add Tags only if defined
if tag_list:
    properties["Tags"] = {
        "multi_select": multi_select_tags
    }

# Make the Notion API request
data = {
    "parent": { "database_id": DATABASE_ID },
    "properties": properties
}

response = requests.post("https://api.notion.com/v1/pages", json=data, headers=headers)

if response.status_code == 200:
    print("✅ Notion entry created successfully.")
else:
    print(f"❌ Failed to create Notion row ({response.status_code}):")
    print(response.text)
    print("Request data was:")
    print(data)
