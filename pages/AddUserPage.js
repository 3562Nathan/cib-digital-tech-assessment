
class AddUserPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    // Stored all selectors found on Add User Form (Modal)
    this.page = page;
    this.firstName = 'input[name="FirstName"]';
    this.lastName = 'input[name="LastName"]';
    this.userName = 'input[name="UserName"]';
    this.password = 'input[name="Password"]';
    this.email = 'input[name="Email"]';
    this.cellPhone = 'input[name="Mobilephone"]';
    this.buttonSave = page.locator('button[class="btn btn-success"]');
    this.roleDropdown = 'select[name="RoleId"]';
    this.addUserModalHeader = page.locator('.modal-header > h3');
  }
  
  // created an add user details function to fill in the add user form
  async addUserDetails(userInfo) {
    await this.page.fill(this.firstName, userInfo.txtFirstName);
    await this.page.fill(this.lastName, userInfo.txtLastName);
    await this.page.fill(this.userName, userInfo.txtUserName);
    await this.page.fill(this.password, userInfo.txtPassword);
    await this.page.fill(this.email, userInfo.txtEmail);
    await this.page.fill(this.cellPhone, userInfo.txtCellPhone);
  }

  /* customer select function used to select between Company AAA and Company BBB radio buttons 
     Takes in the element value as a parameter
  */
  async customerSelection(companyVal) {
    await this.page.check(`input[value="${companyVal}"]`);
  }

  /* Select role function used to select options from the dropdown 
     Takes in the Option in the list option value to be selected
  */
  async selectRole(listOption) {
    await this.page.selectOption(this.roleDropdown, listOption);
  }
}

module.exports = { AddUserPage };