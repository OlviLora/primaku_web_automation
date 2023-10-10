import { WebDriver, By, until, WebElement } from 'selenium-webdriver';
import { AbstractPageObject } from '../AbstractPageObject';
import { driver } from '../../support/hook';
import assert from 'assert';

export class HomePageObject extends AbstractPageObject {
    private linkLihatSemua = By.xpath('//p[contains(text(),"Lihat semua")]');

    private homeMenu = By.xpath('//div[contains(text(), "Home")]');

    private homePopUp = By.xpath('//*[@id="desktopBannerWrapped"]');

    private noButton = By.id('moe-dontallow_button');
    
    private articleMenu = By.xpath('//div[contains(text(), "Artikel")]');

    private listArticle = By.xpath('//*[@id="app-layout"]/descendant::div[contains(@class, "flex gap-1")]');

    constructor() {
        super(driver);
    }

    openHomepage() {
        const pageUrl: string = "https://www.primaku.com/";
        return this.driver.get(pageUrl).then(() => {
            return this.driver.wait(until.elementLocated(this.homeMenu));
        });
    }

    verifyOnHomepage(){
        return this.driver.wait(until.elementLocated(this.homeMenu)).then(() => {
            return this.driver.findElement(this.homeMenu).isDisplayed();
        });
    }

    dismissPopUpIfExist(){
        return this.driver.wait(until.elementLocated(this.homePopUp)).then(() =>{
            return this.driver.findElement(this.noButton).click();
        });
    }

    clickLihatSemua () {
        return this.driver.wait(until.elementLocated(this.linkLihatSemua)).then(() => {
            return this.driver.wait(until.elementLocated(this.linkLihatSemua)).click();
        });
    }

    verifyInArticlePage(){
        return this.driver.wait(until.elementLocated(this.articleMenu)).then(() => {
            return this.driver.findElement(this.articleMenu).isDisplayed();
        });
    }

    verifyListArticle(){
        return this.driver.wait(until.elementLocated(this.listArticle)).then(() => {
            return this.driver.findElement(this.listArticle).isDisplayed();
        });
    }
}
