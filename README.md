# cucumber-playwright-typescript-automation

Sample test automation project based on the following repos:

- <https://github.com/Tallyb/cucumber-playwright>
- <https://github.com/vazuaai/playwright>

Used resources:

- https://khalilstemmler.com/blogs/tooling/prettier (intro to prettier + eslint)
- https://github.com/dustinspecker/awesome-eslint (list of eslint plugins)
- https://eslint.org/docs/latest/use/configure/migration-guide (switch from eslint v8 config to v9)

Stuff to check out:

- https://github.com/microsoft/playwright/issues/11975 (BDD in Playwright support discussion)
- https://github.com/vitalets/playwright-bdd - generate Playwright tests out of Cucumber tests to run them via Playwright (and use the rest of Playwright dev tools)
- https://github.com/Niitch/gherkin-wrapper - Cucumber-to-Playwright wrapper that requires code changes
- https://github.com/serenity-js/serenity-js-cucumber-playwright-template - adapter that requires code changes and uses SerenityBDD
- https://github.com/qavajs - comprehensive solution with a lot of features and integrations (commonJS only though)
  - https://github.com/qavajs/playwright-runner-adapter - the only thing we might need from this solution
  - https://github.com/qavajs/demo/blob/main/playwright-runner/playwright.config.ts - config example

## TODO

- [ ] should be easy setup & get started (add documentation)
  - [x] add recommended vscode extensions
  - [x] configure rcfiles (lint, prettier, tsconfig) to enforce standards (mostly done)
  - [ ] useful hotkeys
- [ ] explore/support both runner options if possible (cucumber & playwright)
  - [x] `npm run test` - cucumber + playwright using cucumber runner
  - [x] `npm run tests:e2e` - playwright without cucumber
  - [ ] vscode test runner extensions
  - configure run & debug stuff
    - [x] get cucumber runner working + debug
    - [ ] explore if we can use pw runner and devtools with cucumber
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

## Running tests requirements:

`node ./node*modules/.bin/cucumber-js features/**/\_.feature --name "^Sign up$"`

1. Test run abilities by scope:

- single test
- all tests (e.g. full regression suite)
- multiple tests from custom hand-picked suite (list of tests/regex as input)
- multiple tests from prebuilt/filtered feature/scope-based suite (e.g. smoke suite; expected functionality similar to Cucumber tags)

2. Ability to rerun failed tests in all of above scenarios:

- after initial execution finishes
- during initial execution
- should be able to specify amount of reruns/retries

3. Test run abilities by method/environment:

- command line
- IDE (preferably with real-time report/monitoring, e.g. IDEA custom test runners)

4. Option (feature flag) for running tests:

- sequentially
- in parallel (can be multiple different options based on parallelization strategy)

5. Option (feature flag) to define list of browser(s)/platform(s) to run tests on (if applicable)

6. Option (feature flag) to define test environment to run tests against (if applicable)

## Tips & tricks

- always look at `package.json` to see available commands!
- make sure to use top-level `await` to wait for method execution/assertion completion!
  - for parallel actions (that don't need to be blocking, e.g. filling multiple form fields) use `Promise.all()`

## What's been explored

- tsx vs ts-node vs deno vs bun
  - tsx doesn't work on windows out of the box, needed to repoint command to cucumber node_modules folder
  - ts-node works out of the box
  - both bun & deno needed fixes in default install pwsh scripts and didn't work in the end :\
