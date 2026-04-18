import {Page, Locator, expect} from '@playwright/test';

export class WebCommons{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    //Common method to generate web element from locator
    async element(locator: string): Promise<Locator>{
        return this.page.locator(locator);
    }

    elements(locator: string): Locator{
        return this.page.locator(locator);
    }

    //Common method to launch the application
    async launchApplication(url: string, title?: string): Promise<void>{
        await this.page.goto(url);
        if(title){
            await expect(this.page).toHaveTitle(title);
        }
    }

    //Common method to Scroll to an Element
    async scrollToElement(locator: string): Promise<void>{
        const element = await this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }

    //Common method to Click on Element
    async clickElement(locator: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); // if needed to scroll before click
        await element.click();
    }

    //Common method to perform double click
    async doubleClickElement(locator: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); // if needed to scroll before click
        await element.dblclick();
    }

    //Common method to perform right click
    async rightClickElement(locator: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); // if needed to scroll before click
        await element.click({button: 'right'});
    }

    //Common method to perform hover on an Element
    async hoverOnElement(locator: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); // if needed to scroll before click
        await element.hover();
    }

    //Common method to perform force click
    async forceClickElement(locator: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); // if needed to scroll before click
        await element.click({force: true});
    }

    //Common method to clear text in an Element
    async clearText(locator: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); 
        await element.clear();
    }

    //Common method to type text into an Element
    async typeText(locator: string, text: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); 
        await this.clearText(locator);
        await element.fill(text);
    }

    //Common method to select an option from dropdown
    async selectOption(locator: string, option: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); 
        await element.selectOption(option);
    }

    //Common method to get text entered in the textbox
    async getText(locator: string): Promise<string>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); 
        return await element.inputValue();
    }

    //Common method to press key on a element
    async pressKey(locator: string, key: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); 
        await element.press(key);
    }

    //Common method to get text from element
    async getElementText(locator: string): Promise<string | null>{
        const element = await this.element(locator);
        return await element.textContent();
    }

    //Common method to get attribute value of an element
    async getElementAtttribute(locator: string, attribute: string): Promise<string | null>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); 
        return await element.getAttribute(attribute);
    }

    //Common method to upload a file
    async uploadFile(locator: string, path: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); 
        await element.setInputFiles(path);
    }

    //Common method to check an element is visible
    async isElementVisisble(locator: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); 
        return await expect(element).toBeVisible();
    }

    //Common method to check an element is enabled
    async isElementEnabled(locator: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); 
        return await expect(element).toBeEnabled();
    }

    //Common method to check an element is enabled
    async isElementDisappeared(locator: string): Promise<void>{
        const element = await this.element(locator);
        await this.scrollToElement(locator); 
        return await expect(element).toBeHidden();
    }

    //Common method to handle alerts
    async handleAlerts(action: 'accept' | 'dismiss', textToEnter?: string): Promise<void>{
        this.page.on('dialog', async dailog =>{
            if(action === 'accept'){
                dailog.accept(textToEnter);
            }else{
                dailog.dismiss();
            }
        })
    }

    //Common method to take screenshot
    async takeScreeshot(path: string): Promise<void>{
        await this.page.screenshot({path});
    }

    //Verify element having text value
    async verifyElementText(locator: string, expectedText:string){
        const element = await this.element(locator);
        await expect(element).toHaveText(expectedText);
    }

    //Common method to compare text values
    async compareText(actual :string |null, expected:string){
        if(!(actual?.includes(expected))){
            throw new Error(`Expected Value is ${expected} , But found ${actual}`);
        }
    }

}