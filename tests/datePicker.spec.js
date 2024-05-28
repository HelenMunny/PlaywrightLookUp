const { test, expect } = require("@playwright/test");

test('date picker', async ({ page }) => {
 await page.goto('https://jqueryui.com/datepicker/');
 const frame = await page.frameLocator('css=[class="demo-frame"]');
 const dateField = await frame.locator('css=[id="datepicker"]');
 dateField.click();

 //way-1
 // dateField.fill('5/25/2024');

 //way-2 select today's date
 // await frame.locator('.ui-datepicker-today').click();

 //way-3 selecting date 3days back from current date
 // const curr = await frame.locator('.ui-datepicker-today > a');
 // const currDate = curr.getAttribute('data-date');
 // const targetDate = parseInt(currDate) - 3;
 // const element = ;
 // await frame.locator(element).click();

})