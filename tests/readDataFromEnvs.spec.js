const { test, expect } = require("@playwright/test");
import { qaTestData } from '../testData/qa/jsonData.json';
import { stageTestData } from '../testData/stage/stage.json';
import { devTestData } from '../testData/dev/dev.json';

test.describe('read data from different test environment', () => {
  let testData;
  if (process.env.environment == 'stage') {
   testData = stageTestData;
  } else if (process.env.environment == 'dev') {
   testData = devTestData;
  }else if (process.env.environment == 'qa') {
   testData = qaTestData;
   }

 for (const [key,value] of Object.entries(testData)) {
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
})

