const { expect } = require('@playwright/test');

exports.HomePage = class HomePage{
 /**
  * 
  * @param {import ('@playwright/test').page} page 
  */

 constructor(page) {
  this.page = page;
  this.searchBar = page.getByPlaceholder('Search');
  this.searchBtn = page.getByRole('button', { name: 'Search', exact: true });
 }


 
  async invokeBrowser(url) {
   await this.page.goto(url);
    await this.page.setViewportSize({width:1536, height:816});
   }

 async searchYoutube(keyword) {
 await this.searchBar.click();
 await this.searchBar.fill("Playwright tutorial by tester talks");
 await this.page.waitForTimeout(2000);
 await expect(this.searchBtn).toBeEnabled();
 await this.searchBtn.click();
 }
}