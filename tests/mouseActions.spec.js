const { test, expect } = require("@playwright/test");

test('drag and drop', async ({ page }) => {
 await page.goto('https://www.google.com/search?q=testers+talk&oq=testers+talk');
 // click
 // await page.getByRole('link', { name: 'Testers Talk' }).first().click();

 // double click
 // await page.getByRole('link', { name: 'Testers Talk' }).first().dblclick();

 // left click
 // await page.getByRole('link', { name: 'Testers Talk' }).first().click({ button: "left" });

 // middle button click
 // await page.getByRole('link', { name: 'Testers Talk' }).first().click({ button: "middle" });

 // right click
 // await page.getByRole('link', { name: 'Testers Talk' }).first().click({ button: "right" });

 // hover
 // await page.locator('[aria-label="Search by image"]').hover();
})