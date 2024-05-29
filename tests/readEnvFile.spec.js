const { test, expect } = require("@playwright/test");

test("read .env file", async ({ page }) => {
 // go to url
 await page.goto(process.env.url)

 // type search with keywords
 await page.getByPlaceholder('Search').click();
 await page.getByPlaceholder('Search').fill("Playwright tutorial by tester talks");
 await page.waitForTimeout(2000);
 await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
})