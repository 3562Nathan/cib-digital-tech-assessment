/* Instantiating all pages and data required for these tests */
const { test, expect } = require('@playwright/test');
const { AddUserPage } = require('../pages/AddUserPage');
const { UserWebTablePage } = require('../pages/UserWebTablePage');
const { firstUser } = require('../data/userData');
const { expectedTableRowDataForSingleTest } = require('../data/tableRowData');
const { roleListOptions, customers, webPageTitle, addUserModalHeaderText, partialPageUrl, tableRowIndex } = require('../data/constants');


// before each runs before each test to navigate to the page
test.beforeEach(async ({ page }) => {
    await page.goto('/angularjs-protractor/webtables/');
});

test.describe('User List Tests', () => {

    test('Validate that you are on the User List Table', async ({ page }) => {
        /* Instantiate the page objects required for this test */
        const userWebTablePage = new UserWebTablePage(page);
        await expect(page).toHaveTitle(webPageTitle); // Validate page title
        let pageUrl = await page.url(); // Store page url
        await expect(pageUrl).toContain(partialPageUrl); // Validate page url
        let strAddUserButton = await userWebTablePage.addUserButton.textContent(); // Store add user button as a string
        await expect(strAddUserButton.trim()).toBe(addUserModalHeaderText); // trim any white space of string and validate
    });

    test('Add users to User List Table', async ({ page }) => {
        /* Instantiate the page objects required for this test */
        const addUserPage = new AddUserPage(page);
        const userWebTablePage = new UserWebTablePage(page);
        await userWebTablePage.addUserButton.click();
        let modalHeaderText = await addUserPage.addUserModalHeader.textContent(); // store add user form header as text
        expect(modalHeaderText).toBe(addUserModalHeaderText);
        await addUserPage.addUserDetails(firstUser); // uses the User object to complete form text details only
        await addUserPage.selectRole(roleListOptions.salesTeam); // rolelistoption taken from the role dropdown
        await addUserPage.customerSelection(customers.companyBbb); // custom selection taken from the company radio buttons
        await addUserPage.buttonSave.click();

        /* Comparing the table row data
            actualArrayComparisonOfFirstRowBoolean - table row 1
        */
        let actualArrayComparisonOfFirstRowBoolean = await userWebTablePage.tableRowValidation(tableRowIndex.firstTableRow, expectedTableRowDataForSingleTest);
        // Validating first table row data to be true according to the above comparison
        await expect(actualArrayComparisonOfFirstRowBoolean).toBeTruthy();
    });
});