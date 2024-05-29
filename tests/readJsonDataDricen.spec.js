const { test, expect } = require("@playwright/test");
import { searchKeywords } from '../testData/qa/jsonData.json';

for (const [key,value] of Object.entries(searchKeywords)) {
 test(`read json file, data driven testing ${value}`, async ({ page }) => {
 // go to url
 await page.goto(process.env.url)

 // type search with keywords
 await page.getByPlaceholder('Search').click();
 await page.getByPlaceholder('Search').fill(value);
 await page.waitForTimeout(2000);
 await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
})

}
