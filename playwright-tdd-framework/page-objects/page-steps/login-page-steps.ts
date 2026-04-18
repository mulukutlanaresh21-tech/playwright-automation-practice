import { Page } from '@playwright/test';
import {WebCommons} from '../../commons/ui/web-commons.ts';
import loginpage from '../page-elements/login-page-elements.json' with {type: 'json'};
import config from '../../config/config.json' with {type: 'json'};

export class LoginPageSteps{

    page: Page;
    web: WebCommons;

    constructor(page: Page){
        this.page = page;
        this.web = new WebCommons(this.page);
    }

    //Method to launch application
    async launchApplication(): Promise<void>{
        await this.web.launchApplication(config.app.url, config.app.title);
    }

    //Method to verify login page is displayed
    async verifyLoginPageIsDisplayed(): Promise<void>{
        await this.web.isElementVisisble(loginpage.loginPageTitle);

    }

    //Method to Enter Email and Password in Text boxes
    async enterUsernameAndPassword(email: string, password: string){
        await this.web.typeText(loginpage.bussinessEmailTextBox, email);
        await this.web.typeText(loginpage.passwordTextBox, password);
    }

    //Method to click on Login button
    async clickOnLoginButton(): Promise<void>{
        await this.web.clickElement(loginpage.loginButton);
    }

    //Method to verify forgot password link is present
    async verifyForgotPasswordLink(){
        await this.web.isElementVisisble(loginpage.forgotPasswordLink);
    }

    //Method to click on fogot password Link
    async clickOnForgotPasswordLink(): Promise<void>{
        await this.web.clickElement(loginpage.forgotPasswordLink);
    }

    //Method to Verify forgot password confirmation Link is present
    async verifyForgotPasswordConfirmationMessage(){
        await this.web.isElementVisisble(loginpage.forgotPasswordConfirmationMsg);
    }

    //Method to verify social media icons
    async verifySocialMediaIcons(){
        await this.web.isElementVisisble(loginpage.googleIcon);
        await this.web.isElementVisisble(loginpage.linkedInIcon);
    }

    //Method to verify signup link is present
    async verifySignUpLinkisDisplayed(){
        await this.web.isElementVisisble(loginpage.signUpLink);
    }

    //Method to verify Login Error message is present
    async verifyLoginErrorMessageIsDisplayed(): Promise<void>{
        await this.web.isElementVisisble(loginpage.loginErrorMessage);
    }

    //Method to verify user is logged out successfully
    async verifyUserIsLoggedOut(): Promise<void> {
        await this.web.isElementVisisble(loginpage.loginPageTitle);
    }


}
