import { Page } from '@playwright/test';
import homePage from '../page-elements/home-page-elements.json' with {type: 'json'};
import { WebCommons } from '../../commons/ui/web-commons.ts';

export class HomePageSteps{

    page: Page;
    web: WebCommons;

    constructor(page: Page){
        this.page = page;
        this.web = new WebCommons(this.page);
    }

    //Method to verify homepage is displayed
    async verifyHomePageIsDisplayed(): Promise<void>{
        await this.web.isElementVisisble(homePage.homePageHeaderLink);
        await this.web.isElementVisisble(homePage.usersLink);
    }

    //Method to click on Profile Icon
    async clickOnProfileIcon(): Promise<void>{
        await this.web.clickElement(homePage.profile);
    }

    //Method to click on Logout Button
    async clickOnLogoutButton(): Promise<void>{
        await this.web.clickElement(homePage.logoutLink);
    }
}