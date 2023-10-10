import { WebDriver, By, WebElement, until, Locator } from 'selenium-webdriver';
import { AbstractPageObject } from '../AbstractPageObject';
import { driver } from '../../support/hook';

export class BasePageObject extends AbstractPageObject {
    constructor() {
        super(driver);
    }

    openURL = async (url: string) => {
        const pageUrl: string = url;
        await this.driver.get(pageUrl);
    };

    waitElement = async (element: Locator, timeout: any ) => {
        let el = this.driver.findElement(element);
        await this.driver.wait(until.elementIsVisible(el), timeout);
    };
}