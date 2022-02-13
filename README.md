# cib-digital-tech-assessment
Automated UI Test of Assessment


Description:
Using the Playwright to perform all UI tests for the web tables app.



Frameworks used:
- Microsoft Playwright
- NodeJS and Javascript



Setup:
- Ensure that you have the latest LTS NodeJS version installed on your machine
Please see link: https://nodejs.org/en/
- Once installed and machine restarted, please see Task2 Web Assessment folder
with code
- Ensure that you have Vscode or any other IDE installed before attempting to open the project
Please see link to Vscode: https://code.visualstudio.com
- Open the project in Vscode or other IDE
- Open the Terminal by clicking Terminal found at the top in the menu items - In the terminal, run "npm install” to install @playwright/test
- Once completed, you will need to install the necessary browsers:
Run: "npx playwright install"
- Once all the necessary browsers are installed you can take a look at the package.json file which has the script commands to run the tests



Running Tests:
- Open the package.json file and look at the scripts as listed below:
To run the below in your terminal, use the following:
E.g. "npm run test” - Will run all tests with both Chrome and Firefox
      Command Line
Description
"test": "npx playwright test —headed”
All tests with both Chrome and Firefox
"test:headless": "npx playwright test — project=chromium”
Run Chrome only

"test:firefox": "npx playwright test -- project=firefox —headed”
Run Firefox only
"test:report": "npx playwright test -- project=chromium && npx playwright show- report”
Chrome and kick off report after the test
"report": "npx playwright show-report”
Generate report
To speed up the testing, you could add more works to the playwright.config.js file for parallel testing. Currently I have it set to one worker.


Approach:
- Javascript and NodeJS was used as I have been working with the language and runtime
for more than 5 years now.
- To scale and maintain the project, page objects in the form of classes were used to handle Element Selectors as properties and the methods were used to modularise the code and simplify more lengthy and complex functionality.
- Data files used to store constant, user, data driven data.
Required Improvements:
- I would have liked to include a MongoDB database, due to time constraints this would slowed down the testing progress.
- My goal was to include a screenshot comparison but I felt that it was too time consuming for this project to be implements as the folder structure and base screenshots will need to be managed well.