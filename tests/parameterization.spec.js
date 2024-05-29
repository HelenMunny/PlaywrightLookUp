const { test, expect } = require("@playwright/test");

const searchKeywords = ["Playwright tutorial", "appium tutorial", "selenium tutorial"]
for (const keyword of searchKeywords) {
 
test(`parameterization ${keyword}`, async ({ page }) => {
 // go to url
 await page.goto("https://www.youtube.com/")

 // type search with keywords
 await page.getByPlaceholder('Search').click();
 await page.getByPlaceholder('Search').fill(keyword);
 await page.waitForTimeout(2000);
 await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
 await page.getByRole('button', { name: 'Search', exact: true }).click();
 await page.waitForTimeout(2000);
})

}
