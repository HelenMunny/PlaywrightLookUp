const { test, expect } = require("@playwright/test");

test("visual comparison", async ({ page }) => {
 // go to url
 await page.goto("https://www.youtube.com/")

 // await expect(page).toHaveScreenshot('youtube.png');    //takes sreenshot as a base, if you have your own reference image you can add it to the newly generated location

 // change the ui by writting something to the search bar
 await page.getByPlaceholder('Search').click();
 await page.getByPlaceholder('Search').fill("Playwright tutorial by tester talks");

 // compare between two screenshots now
 await expect(page).toHaveScreenshot('youtube.png');    //test will fail as visual ui don't match
})