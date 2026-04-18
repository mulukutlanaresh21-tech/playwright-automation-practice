import { test, expect, TestInfo } from '@playwright/test';
import { CookiesPageSteps } from '../../page-objects/page-steps/cookie-page-steps.ts';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.ts';
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.ts';
import data from '../../testdata/ui/data.json' with {type: 'json'};

let loginPage: LoginPageSteps;
let homePage: HomePageSteps;
let cookiePage: CookiesPageSteps;
let testData: any;

test.describe("Creatio Application UI Test", () =>{

    //Initialize the page objects before each test
    test.beforeEach(async({ page }) =>{
        loginPage = new LoginPageSteps(page);
        homePage = new HomePageSteps(page);
        cookiePage = new CookiesPageSteps(page);
    })

    //Test Case 1: Verify Cookies Page is Displayed
    test("Verify Cookie Page", async() =>{
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
    })

    //Test Case 2: Verify cookies pop-up content 
    test("Verify Cookies Popup Content", async() =>{
        testData = data["Verify Cookies Popup Content"];
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.verifyCookiePageContent(testData.content);
    })

    //Test Case 3: Verify Logos displayed in the cookies page.
    test('Verify Cookie page Logos', async() =>{
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.verifyCookiePageLogos();

    })

    //Test Case 4: Verify selection buttons in the cookies page.
    test('Verify Cookie page selection Buttons', async() =>{
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.verifyCookiePageSelectionButtons();

    })

    //Test Case 5: Verify switch buttons in the cookies page.
    test('Verify Cookie page toggle buttons', async() =>{
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.verifyCookiePageToggleButtons()

    })

    //Test Case 6: Verify show details link in the cookies page.
    test('Verify Cookie page show details link', async() =>{
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.verifyCookiePageShowDetailsLink();

    })

    //Test Case 7: Verify expanded view of cookies pop-up after clicking on show details link.
    test('Verify Expand view of Cookie popup', async() =>{
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.clickOnShowDetailsLink();
        await cookiePage.verifyExpandedViewOfCookiesPopup();

    })

    //Test Case 8: Verify cookies pop-up getting closed after clicking on 'allow all' button.
    test('Verify Cookie Popup is closed after clicking allow all button', async() =>{
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.verifyCookiePageSelectionButtons();
        await cookiePage.clickOnSelectionbutton('allow all');
        await cookiePage.verifyCookiePageClosed();

    })


    //Test Case 9: Verify Login Functionality with valid credentials.
    test('Verify Login with Valid Credentials', async({}, testInfo: TestInfo) =>{
        testData = data[testInfo.title as keyof typeof data]
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.verifyCookiePageSelectionButtons();
        await cookiePage.clickOnSelectionbutton('allow all');
        await cookiePage.verifyCookiePageClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsernameAndPassword(testData.username, testData.password);
        await loginPage.clickOnLoginButton();
        await homePage.verifyHomePageIsDisplayed();
    });


    //Test Case 10: Verify Login Functionality with invalid credentials.
    test('Verify Login with Invalid Credentials', async({}, testInfo: TestInfo) =>{
        testData = data[testInfo.title as keyof typeof data]
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.verifyCookiePageSelectionButtons();
        await cookiePage.clickOnSelectionbutton('allow all');
        await cookiePage.verifyCookiePageClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsernameAndPassword(testData.username, testData.password);
        await loginPage.clickOnLoginButton();
        await loginPage.verifyLoginErrorMessageIsDisplayed();
    });

    //Test Case 11: Verify Forgot Password Functionality.
    test('Verify Forgot Password Functionality', async({}, testInfo: TestInfo) =>{
        testData = data[testInfo.title as keyof typeof data]
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.verifyCookiePageSelectionButtons();
        await cookiePage.clickOnSelectionbutton('allow all');
        await cookiePage.verifyCookiePageClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterUsernameAndPassword(testData.username, testData.password);
        await loginPage.clickOnForgotPasswordLink();
        await loginPage.verifyForgotPasswordConfirmationMessage();
    });

    //Test Case 12: Verify Social Media Login Icons are displayed on the login page.
    test('Verify Social Media Icons in Login page', async() =>{
        await loginPage.launchApplication();
        await cookiePage.verifyCookiePageisDisplayed();
        await cookiePage.verifyCookiePageSelectionButtons();
        await cookiePage.clickOnSelectionbutton('allow all');
        await cookiePage.verifyCookiePageClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.verifySocialMediaIcons();

    });


})