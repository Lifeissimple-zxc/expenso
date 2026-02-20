# Expenso

Expenso is an AI bot for expense tracking.

## Setup
Linter:
```bash
npx @biomejs/biome init 
```

## Design
user -> telegram -> expenso -> Gsheets (+ db for persisting ongoing cost items)
                       ↓
                      OCR
                       ↓
                      LLM (if OCR is not successful / confidence is low?)
                       

## TODOs
[x] Repo setup
[] Telegram Integration
[] OCR
[] LLM
[] Google Sheets
[]
