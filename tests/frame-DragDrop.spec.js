const { test, expect } = require("@playwright/test");

test('drag and drop', async ({ page }) => {
 await page.goto('https://jqueryui.com/droppable/');
 const frame = page.frameLocator('iframe').locator('html');
 const srcElement = frame.locator('xpath=//div[@id="draggable"]');
 const destElement = frame.locator('xpath=//div[@id="droppable"]');
 await srcElement.dragTo(destElement);
})