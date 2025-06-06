#!/usr/bin/env node

import inquirer from "inquirer";
import { execSync } from "child_process";

const commitTypes = [
  { name: "✨ feat – new feature", value: "✨feat" },
  { name: "🌱 seed – seed data", value: "🌱seed" },
  { name: "🔨 refactor – code change", value: "🔨refactor" },
  { name: "✅ test – testing only", value: "✅test" },
  { name: "📝 docs – documentation", value: "📝docs" },
  { name: "💄 style – UI or formatting", value: "💄style" },
  { name: "🚑 fix – critical fix", value: "🚑fix" },
];

const { day, type, message } = await inquirer.prompt([
  {
    type: "input",
    name: "day",
    message: "What day is this commit for?",
    validate: (input) =>
      /^\d+$/.test(input) ? true : "Please enter a numeric day (e.g., 43)",
  },
  {
    type: "list",
    name: "type",
    message: "Select commit type:",
    choices: commitTypes,
  },
  {
    type: "input",
    name: "message",
    message: "Write a short commit message:",
    validate: (input) =>
      input.trim() !== "" ? true : "Message cannot be empty",
  },
]);

const fullMessage = `{day-${day}} ${type}: ${message}`;

console.log(`\n✅ Commit message:`);
console.log(`\x1b[36m${fullMessage}\x1b[0m\n`);

const { confirm } = await inquirer.prompt([
  {
    type: "confirm",
    name: "confirm",
    message:
      "Do you want to run this git commit now? (Only staged files will be included)",
    default: false,
  },
]);

if (confirm) {
  try {
    execSync(`git commit -m "${fullMessage}"`, {
      stdio: "inherit",
    });
  } catch (err) {
    console.error("❌ Commit failed:", err.message);
  }
} else {
  console.log("💡 Copy and paste this into your own commit:");
  console.log(`\n${fullMessage}\n`);
}
