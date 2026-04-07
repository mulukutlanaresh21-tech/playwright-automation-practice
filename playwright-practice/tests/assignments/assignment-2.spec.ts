import {test, expect} from '@playwright/test';

test("Assignment-2 Test cases", async({page})=>{

    // 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto('https://demoqa.com/automation-practice-form');

    // 2. Wait for Page-load
    await expect(page).toHaveTitle(/demosite/);
    expect(await page.locator('//h1[text()="Practice Form"]').textContent()).toBe("Practice Form");

    // 3. Enter First name and Last name
    await page.locator('input#firstName').fill("Naresh");
    await page.locator('input#lastName').fill("Mulukutla");

    // 4. Enter Email
    await page.locator('input#userEmail').fill("mulukutlanaresh21@gmail.com");

    // 5. Select Gender (Male)
    await setGender(page, "Male");

    // 6. Enter mobile number
    await page.locator('input#userNumber').fill("9876543210");

    // 7.Select DOB (1-Feb-1991)
    await setDOB(page, "11", "June", "1994");

    // 8.Search and Select Computer Science and English
    await selectSubjects(page, ["Computer Science", "English"]);

    // 9.Select Hobbies as Sports and Reading
    await setHobbies(page, ["Sports", "Reading"]);

    // 10.Upload photo
    const uploadElement = page.locator('input#uploadPicture');
    //await uploadElement.setInputFiles('');

    // 11.Select State and city
    await selectState(page, "Rajasthan");
    await selectcity(page, "Jaipur");

    // 11.Submit Details
    await page.locator('button#submit').click();

});

async function setGender(page: any, gender: string) {
    const genderRadio = page.locator(`//label[text()="${gender}"]`);
    await genderRadio.click();
    
};

async function setDOB(page: any, date: string, month: string, year: string) {
    // DOB textbox
    const inputTextBoxDOB = page.locator('input#dateOfBirthInput');
    await inputTextBoxDOB.click();

    //select month
    const monthDropdown = page.locator('select.react-datepicker__month-select');
    await monthDropdown.selectOption({label: `${month}`});

    //select year
    const yearDropdown = page.locator('select.react-datepicker__year-select');
    await yearDropdown.selectOption({label: `${year}`});

    //select date
    const selectDate = page.locator(`//div[text()="${date}" and contains(@aria-label, "${month}")]`);
    await selectDate.click();
}

async function selectSubjects(page: any, subjects: string[]) {
    // click on input container
    await page.locator('div[class*="subjects-auto-complete__input-container"]').click();

    for (let subject of subjects){
        await page.locator('input#subjectsInput').fill(subject);
        await page.locator('div[class*="subjects-auto-complete__input-container"]').press('Enter');
    }
    
}

async function setHobbies(page: any, hobbies: string[]) {
    for (let hobbie of hobbies){
        await page.locator(`//label[text()="${hobbie}"]`).click();
    
    }
    
}

async function selectState(page: any, state: string) {
    await page.locator("//div[@id='state']").click();
    await page.locator(`//div[text()='${state}']`).click();
}

async function selectcity(page: any, city: string) {
    await page.locator('div#city').click();
    await page.locator(`//div[text()='${city}']`).click();
}

