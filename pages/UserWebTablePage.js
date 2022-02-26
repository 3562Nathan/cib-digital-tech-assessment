
class UserWebTablePage {

    /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    // Stored all selectors found on Add Web Table page
    this.page = page;
    // Locator used to select all table rows
    this.userListTableRows = page.locator('table[table-title="Smart Table example"] > tbody > tr');
    this.firstTableRow = page.locator('table[table-title="Smart Table example"] > tbody > tr:first-child');
    this.addUserButton = page.locator('button[class="btn btn-link pull-right"]');
  }

  // Allows the user to get specific row data based on the row index (Please see data/constants.js file for labels)
  async getSingleTableRowDataByIndex(rowIndex) {
    // store table row element based on index
    let userListTableRowElement = await this.userListTableRows.nth(rowIndex);
    // Create temporary array to store newly formatted data
    let tempArray = [];
    // Get all table cell text content based on the above selected row
    let tableCells = await userListTableRowElement.locator('td').allTextContents();
    // Loop through the cell data to remove empty strings and push to tempArray
    for(let cell of tableCells)
        cell && tempArray.push(cell);
    // tableCells should become tempArray    
    tableCells = tempArray;
    // Remove last item in the tableCells Array as it contains the Edit link
    tableCells.pop();
    // Return the remaining array items
    return tableCells;
  }

  // Used to compare two arrays
  async arrayEquals(expectedArray, actualArray) {
      return Array.isArray(expectedArray) &&
      Array.isArray(actualArray) &&
      expectedArray.length === actualArray.length &&
      expectedArray.every((str, index) => str === actualArray[index]);
  }

  // Combines the getSingleTableRowDataByIndex and arrayEquals functions to validate the table row by actual and expected data arrays
  async tableRowValidation(actualRowIndex, expectedArray) {
    let tableRow = await this.getSingleTableRowDataByIndex(actualRowIndex);
    return await this.arrayEquals(expectedArray, tableRow);
  }
};

module.exports = { UserWebTablePage };