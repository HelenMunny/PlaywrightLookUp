const { test, expect } = require("@playwright/test");

test("practice", async ({ page }) => {
 await page.goto("https://ebay.com");
 await expect(page.locator('css=[id="gh-btn"]')).toBeEnabled();
})