import {Page} from '@playwright/test';
import {WebCommons} from '../../commons/ui/web-commons.ts';
import cookiePage from '../page-elements/cookies-page-elements.json' with {type: 'json'};

export class CookiesPageSteps{
    page: Page;
    webcommon: WebCommons;

    constructor(page: Page){
        this.page = page;
        this.webcommon = new WebCommons(this.page);
    }

    //Method to verify cookie space is displayed 
    async verifyCookiePageisDisplayed(){
        await this.webcommon.isElementVisisble(cookiePage.cookiesHeader);
    }

    //Method to verify content of cookie page
    async verifyCookiePageContent(expectedContent: string){
        await this.webcommon.isElementVisisble(cookiePage.cookiesContent);
        const actualContent = await this.webcommon.getElementText(cookiePage.cookiesContent);
        await this.webcommon.compareText(actualContent, expectedContent);
    }

    //Method to verify the logos displayed on the cookie's pop-up 
    async verifyCookiePageLogos(){
        await this.webcommon.isElementVisisble(cookiePage.creatioLogo);
        await this.webcommon.isElementVisisble(cookiePage.cookieBotLogo);
    }

    //Method to verify all the selection buttons displayed in the cookies popup. 
    async verifyCookiePageSelectionButtons(){
        await this.webcommon.isElementVisisble(cookiePage.allowAllButton);
        await this.webcommon.isElementVisisble(cookiePage.allowSelectionButton);
        await this.webcommon.isElementVisisble(cookiePage.denyButton);
    }

    //Method to verify all the Toggle buttons displayed in the cookies popup. 
    async verifyCookiePageToggleButtons(){
        await this.webcommon.isElementVisisble(cookiePage.necessaryToggleButton);
        await this.webcommon.isElementVisisble(cookiePage.preferencesToggleButton);
        await this.webcommon.isElementVisisble(cookiePage.statisticsToggleButton);
        await this.webcommon.isElementVisisble(cookiePage.marketingToggleButton);
    }

    //Method to verify show details link is displayed in the cookies popup. 
    async verifyCookiePageShowDetailsLink(){
        await this.webcommon.isElementVisisble(cookiePage.showDetailsLink);
    }

    //Method to click on the show details link in the cookies pop-up. 
    async clickOnShowDetailsLink(){
        await this.webcommon.clickElement(cookiePage.showDetailsLink);
    }

    //Method to verify the expanded view of Cookies Popup
    async clickOnCookiePopUpExpandView(){
        await this.webcommon.clickElement(cookiePage.popupExpandView);
    }

    //Method to verify the expanded view of Cookies Popup. 
    async verifyExpandedViewOfCookiesPopup(){
        await this.webcommon.isElementVisisble(cookiePage.popupExpandView);
    }

    //Method two: click on the specific selection button. 
    async clickOnSelectionbutton(buttonName: string){
        switch(buttonName){
            case 'allow all':
                await this.webcommon.clickElement(cookiePage.allowAllButton);
                break;
            case 'allow selection':
                await this.webcommon.clickElement(cookiePage.allowSelectionButton);
                break;
            case 'deny':
                await this.webcommon.clickElement(cookiePage.denyButton);
                break;
            default:
                throw new Error(`Invalid button Name: ${buttonName}`);
        }
    }

    //Method to verify Cookies pop-up is closed. 
    async verifyCookiePageClosed(){
        await this.webcommon.isElementDisappeared(cookiePage.cookiesHeader);
    }
    
}