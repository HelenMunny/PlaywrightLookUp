// const { test, expect } = require('@playwright/test');
// const { HomePage } = require('../pageClasses/homePage');

// test('HomePage test', async ({page}) => {
//  const home = new HomePage(page);
//  await home.goto("https://youtube.com");
//  await home.searchYoutube("playwright tutorial");
// })
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pageClasses/homePage');

test('Home test, Page Object Model', async ({ page }) => {
 const home = new HomePage(page);
 await home.invokeBrowser('https://youtube.com');
 await home.searchYoutube();
})