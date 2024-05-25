const { test, expect } = require("@playwright/test");
test.beforeEach('invoke browser', async ({ page }) => {
 await page.goto('https://www.youtube.com/');
 await page.waitForTimeout(5000);
})
test('take element screenshot', async ({ page }) => {
 const date = new Date();
 const name = date.getTime();
 await page.getByRole('link', { name: 'YouTube Home' }).screenshot({ path: `./screenshots/${name}.png` });
})
test('take page screenshot', async ({ page }) => {
 const date = new Date();
 const name = date.getTime();
 await page.screenshot({ path: `./screenshots/${name}.png` });
})
test('take full page screenshot', async ({ page }) => {
 const date = new Date();
 const name = date.getTime();
 await page.screenshot({ path: `./screenshots/${name}.png`, fullPage:true });
})