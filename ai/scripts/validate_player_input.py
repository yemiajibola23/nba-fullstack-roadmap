import json
import sys
from jsonschema import validate, ValidationError

def load_json_file(filepath):
    with open(filepath, "r") as f:
        return json.load(f)

def main():
    if len(sys.argv) != 3:
        print("Usage: python validate_player_input.py <data_file.json> <schema_file.json>")
        sys.exit(1)

    data_file = sys.argv[1]
    schema_file = sys.argv[2]

    try:
        data = load_json_file(data_file)
        schema = load_json_file(schema_file)
        validate(instance=data, schema=schema)
        print("✅ Validation passed!")
    except ValidationError as ve:
        print("❌ Validation failed:")
        print(ve.message)
    except Exception as e:
        print("⚠️ Error loading files or schema:")
        print(e)

if __name__ == "__main__":
    main()
