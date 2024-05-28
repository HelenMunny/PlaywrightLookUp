const { test, expect } = require("@playwright/test");

test('dropdown', async ({ page }) => {
 await page.goto('https://www.ebay.com/');
 const dropdown = page.locator('xpath=//select[@id="gh-cat"]');
 dropdown.selectOption('Baby');
})