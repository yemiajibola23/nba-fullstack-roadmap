# 🏀 Day 4 Reflection — Mastering the Developer Environment

## 🎯 Objective

Build a fast, efficient, and enjoyable development workflow by setting up a **professional-grade terminal**, installing key shell enhancements, and integrating **ESLint + Prettier** for clean, consistent code across projects.

---

## ✅ What I Built

- A customized and responsive **terminal + shell environment** using iTerm2, Zsh, and productivity plugins  
- A **Git-aware prompt** with theme and branch context  
- Integrated **ESLint (Airbnb style)** and **Prettier** into the project workspace for automated code quality enforcement

---

## 🔧 Implementation Details

### 💻 Terminal Environment

- Installed **iTerm2** to replace the default macOS Terminal for split panes, search, profiles, and better UI  
- Installed **Oh My Zsh** to manage `.zshrc` configuration

### 🔌 Zsh Plugins

- Enabled:
  - `zsh-autosuggestions` – real-time command suggestions  
  - `zsh-syntax-highlighting` – command colorization  
  - `z` / `autojump` – rapid directory navigation

### 🎨 Git Prompt & Theme

- Fixed missing Git branch display in prompt  
- Installed theme (**agnoster** or **powerlevel10k**) with Git integration  
- Verified Git context appeared in prompt within project directory

### 🔧 CLI Tooling

- Installed `eza` as a modern `ls` replacement via Homebrew:
  ```sh
  alias ls='eza -lah --git'
