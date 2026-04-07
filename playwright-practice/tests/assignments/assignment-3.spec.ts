import {test, expect, chromium} from '@playwright/test';

test("assignment-3 test cases", async() =>{

    const browserengine = await chromium.launch({channel: 'chrome', headless: false});

    const browserContext = await browserengine.newContext();

    await browserContext.clearCookies();

    const page = await browserContext.newPage();

    // 1. Enter URL and Launch the application (https://demoqa.com/alerts)
    await page.goto('https://demoqa.com/alerts');

    // 2. Locate Alert buttons to trigger the alerts
    const infoAlert = page.locator('button#alertButton');
    const confirmAlert = page.locator('button#confirmButton');
    const promptAlert = page.locator('button#promtButton');

    // 3. Click on the information alert and copy the alert message and then select OK button
    page.once('dialog', async dailog => {
        console.log(dailog.message());
        dailog.accept();
    })
    await infoAlert.click();

    // 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
    page.once('dialog', async dailog =>{
        console.log(dailog.message());
        dailog.dismiss();
    })
    await confirmAlert.click();
    await expect(page.locator('span#confirmResult')).toHaveText("You selected Cancel");

    // 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
    page.once('dialog', async dailog =>{
        console.log(dailog.message());
        dailog.accept("Naresh");
    })
    await promptAlert.click();
    await expect(page.locator('span#promptResult')).toHaveText("You entered Naresh");
})