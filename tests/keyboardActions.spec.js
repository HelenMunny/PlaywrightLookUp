const { test, expect } = require("@playwright/test");

test('keyboard actions', async ({ page }) => {
 await page.goto('https://www.google.com/');
 await page.keyboard.type('Hello World!');  //type
 await page.keyboard.press('Shift+A');  //keyPress
 await page.keyboard.press('Delete');
 await page.keyboard.up('Shift');   //keyUp
 await page.keyboard.down('Delete');  //keyDown
})