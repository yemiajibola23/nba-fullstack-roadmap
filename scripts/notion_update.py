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
day = sys.argv[1]
title = sys.argv[2]
category = sys.argv[3]
priority = sys.argv[4]
estimated_time = sys.argv[5]
actual_time = sys.argv[6]
reflection_url = sys.argv[7]
tags = sys.argv[8]

tag_list = tags.split(",")
multi_select_tags = [{"name": tag.strip()} for tag in tag_list]

data = {
    "parent": { "database_id": DATABASE_ID },
    "properties": {
        "Day #": {
            "number": int(day)
        },
        "Task/Module": {
            "title": [{
                "text": { "content": title }
            }]
        },
        "Category": {
            "select": {
                "name": category
            }
        },
        "Status": {
            "select": {
                "name": "Completed"
            }
        },
        "Priority": {
            "select": {
                "name": priority
            }
        },
        "Time Estimate (hrs)": {
            "number": int(estimated_time)
        },
        "Actual Time (hrs)": {
            "number":int(actual_time)
        },
        "Reflection": {
            "url": reflection_url
        },
        "Tags": {
            "multi-select": multi_select_tags
        }
    }
}

response = requests.post("https://api.notion.com/v1/pages", headers=headers, json=data)

if response.status_code == 200:
    print("✅ Notion row created successfully.")
else:
    print(f"❌ Failed to create Notion row ({response.status_code}):")
    print(response.text)
    print("Request data was:")
    print(data)
