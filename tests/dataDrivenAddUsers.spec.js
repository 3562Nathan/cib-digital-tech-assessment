/* Instantiating all pages and data required for these tests */
const { test, expect } = require('@playwright/test');
const { AddUserPage } = require('../pages/AddUserPage');
const users = require('../data/dataDrivenData');
const { UserWebTablePage } = require('../pages/UserWebTablePage');
const { expectedFirstTableRow, expectedSecondTableRow } = require('../data/tableRowData');
const { addUserModalHeaderText, tableRowIndex } = require('../data/constants');

// before each runs before each test to navigate to the page
test.beforeEach(async ({ page }) => {
    await page.goto('/angularjs-protractor/webtables/');
});

// Test Suite using the data driven approach based on the data/dataDrivenData.js file to add the two records as requested
test.describe('Data Driven User List Tests', () => {

        test('Add Users to List Table', async ({ page }) => {
            /* Instantiate the page objects required for this test */
            const addUserPage = new AddUserPage(page);
            const userWebTablePage = new UserWebTablePage(page);
            // Data on the website gets erased after each test, therefore the loop is added within the test
            for (user of users) {
                await userWebTablePage.addUserButton.click();
                let modalHeaderText = await addUserPage.addUserModalHeader.textContent(); // store add user form header as text
                expect(modalHeaderText).toBe(addUserModalHeaderText);
                await addUserPage.addUserDetails(user); // uses the User object to complete form text details only
                await addUserPage.selectRole(user.roleListOption); // rolelistoption taken from the role dropdown
                await addUserPage.customerSelection(user.customer); // custom selection taken from the company radio buttons
                await addUserPage.buttonSave.click();
            };

            /* Comparing the table row data
            actualArrayComparisonOfFirstRowBoolean - table row 1
            actualArrayComparisonOfSecondRowBoolean - table row 2
            */
            let actualArrayComparisonOfFirstRowBoolean = await userWebTablePage.tableRowValidation(tableRowIndex.firstTableRow, expectedFirstTableRow);
            let actualArrayComparisonOfSecondRowBoolean = await userWebTablePage.tableRowValidation(tableRowIndex.secondTableRow, expectedSecondTableRow);
            
            // Validating each table row data to be true according to the above comparison
            await expect(actualArrayComparisonOfFirstRowBoolean).toBeTruthy();
            await expect(actualArrayComparisonOfSecondRowBoolean).toBeTruthy();
        });
});