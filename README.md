# cucumber-playwright-typescript-automation

Sample test automation project based on the following repos:

- <https://github.com/Tallyb/cucumber-playwright>
- <https://github.com/vazuaai/playwright>

## TODO

- [ ] should be easy setup & get started (add documentation)
  - [x] add recommended vscode extensions
  - [ ] configure rcfiles (lint, prettier, tsconfig) to enforce standards (mostly done)
    - [ ] figure out glue+feature files not properly linked in vscode
    - [ ] configure run & debug stuff
    - [ ] complete setup <https://github.com/microsoft/vscode-eslint>
  - [ ] useful hotkeys
- [ ] explore/support both runner options if possible (cucumber & playwright)
  - [x] `npm run test` - cucumber + playwright using cucumber runner
  - [x] `npm run tests:e2e` - playwright without cucumber
  - [ ] clean up commands
- [ ] explore/support both page object pattern and functional pattern (use both, see what happens)
  - [x] add as separate directories, make sure both test scopes work
  - [ ] merge together & clean up
  - [ ] use multiple tsconfigs for better flexibility (is it possible?)
- [ ] showcase/document run and reporting options
  - [ ] pw
  - [ ] cucumber
  - [ ] allure
  - [ ] export to junit for jenkins plugins consumption
- [ ] add before/after hooks
  - [ ] global auth token storage for api / ui logins?
- [ ] add api/db client support
  - [ ] barebones api support exists
    - [ ] explore libraries?
  - [ ] db not needed? explore libraries just in case
- [ ] add saucedemo feature files

## Tips & tricks

- always look at `package.json` to see available commands!

## What's been explored

- tsx vs ts-node vs deno vs bun
  - tsx doesn't work on windows out of the box, needed to repoint command to cucumber node_modules folder
  - ts-node works out of the box
  - both bun & deno needed fixes in default install pwsh scripts and didn't work in the end :\
