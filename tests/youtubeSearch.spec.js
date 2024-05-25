const { test, expect } = require("@playwright/test");

test("validate youtube search", async ({ page }) => {
 // go to url
 await page.goto("https://www.youtube.com/")

 // type search with keywords
 await page.getByPlaceholder('Search').click();
 await page.getByPlaceholder('Search').fill("Playwright tutorial by tester talks");
 await page.waitForTimeout(2000);
 await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
 await page.getByRole('button', { name: 'Search', exact: true }).click();
 await page.waitForTimeout(2000);
 await page.getByRole('link', { name: 'Playwright by Testers Talk Testers Talk · Playlist • Updated 5 days ago' }).click();
 await expect(page).toHaveURL("https://www.youtube.com/watch?v=2poXBtifpzA&list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM");
})