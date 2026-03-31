import {test, expect, chromium} from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started1' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.only("my test cases", async({}) =>{
  //Launch the Chrome browser engine
  const browserEngine = await chromium.launch({channel: 'chrome', headless: false}); //msedge

  //Within the browser engine, now launch the new browser context /incognito window
  const browserContext = await browserEngine.newContext();

  //Clear cookies
  await browserContext.clearCookies();

  //Within the browser context, now launch the new page / tab
  const page = await browserContext.newPage();
  await page.goto('https://www.google.com/');

  await expect(page).toHaveTitle(/Google/);

  //await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill("Naresh Mulukutla");

});
