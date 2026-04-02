import {test, expect, chromium} from '@playwright/test';

test('Assignment-1 Test cases', async({}) =>{

    const browserEngine = await chromium.launch({channel:'chrome', headless: false});
    const browserContext = await browserEngine.newContext();
    await browserContext.clearCookies();
    
    const page = await browserContext.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

    //1. Launch Application
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    //2. verify application logo is displayed
    await expect(page.locator('img.logo')).toBeVisible();

    //3. Verify application caption displayed as "Experience the difference"
    const caption = await page.locator('//p[contains(text(), "Experience")]').textContent();
    await expect(caption).toBe("Experience the difference");

    //4. Enter invalid username
    await page.locator('input[name="username"]').fill('Naresh');

    //5. Enter empty Password
    await page.locator('input[name="password"]').fill('');

    //6. Click on login button
    await page.getByRole('button', {name: 'Log In'}).click();

    //7. Verify the error message "Please enter a username and password."
    const errorMsg =  await page.locator('p.error').textContent();
    await expect(errorMsg).toBe("Please enter a username and password.");

    //8. Click on admin page link
    await page.locator('ul.leftmenu > li > a[href*="admin"]').click();

    //9. select the option "soap" from dba mode radio button
    await page.locator('input[value="soap"]').check();

    //10. Scroll to element dropdown
    const dropdownelement = await page.locator('select#loanProvider');
    await dropdownelement.scrollIntoViewIfNeeded();

    //11. Select the option web service from the dropdown
    await dropdownelement.selectOption({label: 'Web Service'});

    //12. click on submit button'
    await page.locator('//input[@value="Submit"]').click();

    //13. verify submission is successful by validating success message
    const successMsg = await page.locator('//div[@id="rightPanel"]/p/b').textContent();
    await expect(successMsg).toBe("Settings saved successfully.");

    //14. Click on services page link
    await page.locator('ul.leftmenu > li > a[href^= "services"]').click();

    //15. wait for service page
    await page.waitForURL(/services.htm/);
    await expect(page).toHaveURL(/services.htm/);
    
    // 16. Scroll down till bookstore services table
    const bookServices = await page.locator('//span[text()="Bookstore services:"]');
    await bookServices.scrollIntoViewIfNeeded();

    // 17. get total rows of books store services table
    const tableRow = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr');
    const rowCount = await tableRow.count();
    console.log("Bookstore services Table row count: "+ rowCount);

    // 18. get total columns of books store services table
    const tableCol = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]/td');
    const colCount = await tableCol.count();
    console.log("Bookstore services Table column count: "+ colCount);

    // 19. Print table data (row wise and column wise data)
    const rows = page.locator("//span[text()='Bookstore services:']/following-sibling::table[1]//tbody/tr");

    const Count = await rows.count();

    for (let i = 0; i < Count; i++) {
        const rowText = await rows.nth(i).textContent();
        console.log(`Row ${i + 1}: ${rowText}`);
    }

})