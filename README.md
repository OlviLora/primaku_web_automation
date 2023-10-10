# primaku_web_automation
This project contains web automation built using Selenium with the Typescript programming language, integrated with Cucumber to define BDD steps in test cases. The project has been developed using NPM tools.

## Prerequisites
- Node.js and NPM
- Typescript
- Selenium Webdriver
- Cucumber

## How to Run?
1. Clone the repository.
```git clone git@github.com:OlviLora/primaku_web_automation.git ```
2. Go to the repository automation and open in the Editor.
3. Add Dependency defined in package-lock.json file by running script below to install all the dependency in local.
```npm i```
4. List the script name to run test in file package.json
```
"scripts": {
    "test-example": "tsc && cucumber-js --tags '@example' --require ./dist/stepDefinitions/** --require ./dist/scenarios/**/* --format ./dist/support/reporter.js:.dummy.txt",
    "test-homepage": "tsc && cucumber-js --tags '@lihat_semua' --require ./dist/stepDefinitions/** --format ./dist/support/reporter.js:.dummy.txt"
  },
```
5. Run test script
```npm run test-homepage```
6. The test will be run in the browser
