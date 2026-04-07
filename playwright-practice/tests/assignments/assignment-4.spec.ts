import {test, chromium} from '@playwright/test';

test("Assignment-4 Test cases", async() => {

    const browserEngine = await chromium.launch({channel: 'chrome', headless: false});

    const browserContext = await browserEngine.newContext();

    await browserContext.clearCookies();

    const page = await browserContext.newPage();

    // 1. Enter URL and Launch the application (https://demoqa.com/frames)
    await page.goto("https://demoqa.com/frames");
    
    // 2. Locate Main window element
    const mainWindowElement = page.locator('//h1[text()="Frames"]');

    // 3. Locate the frame and store in the variable
    const frame = page.frameLocator('iframe#frame1');

    // 4. Locate Frame Element
    const frameElement = frame.locator('h1#sampleHeading');

    // 5. Copy and Print text from frame element
    console.log("Frame Element: " + await frameElement.textContent());

    // 6. Copy and Print text from main window element
    console.log("Main Window Element: " + await mainWindowElement.textContent());

})