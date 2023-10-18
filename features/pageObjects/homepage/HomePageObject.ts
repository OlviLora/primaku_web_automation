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

    private listArticleHome = By.className('flex gap-1');

    private firstArticleHome = By.xpath('//*[@class="flex gap-1"]/child::div/div');

    private firstArticle = By.xpath('//*[@id="app-layout"]/descendant::div[contains(@class, "flex gap-1")]/descendant::div/div');

    private articleTitle = "";

    constructor() {
        super(driver);
    }

    async openHomepage() {
        const pageUrl: string = "https://www.primaku.com/";
        await this.driver.get(pageUrl).then(() => {
            return this.driver.wait(until.elementLocated(this.homeMenu));
        });
    }

    async verifyOnHomepage(){
        await this.driver.wait(until.elementLocated(this.homeMenu)).then(() => {
            return this.driver.findElement(this.homeMenu).isDisplayed();
        });
    }
    
    async dismissPopUpIfExist(){
        try{
            await this.driver.findElement(this.homePopUp).isDisplayed().then(async() => {
                await this.driver.findElement(this.noButton).then((element) => {
                    return element.click();
                });
            });
        }catch{
            return this.driver.findElement(this.homeMenu).isDisplayed();
        }
    }

    async clickLihatSemua () {
        await this.driver.wait(until.elementLocated(this.linkLihatSemua)).then(() => {
            return this.driver.findElement(this.linkLihatSemua).click();
        });
    }

    async verifyInArticlePage(){
        await this.driver.wait(until.elementLocated(this.articleMenu)).then(() => {
            return this.driver.findElement(this.articleMenu).isDisplayed();
        });
    }

    async verifyListArticle(){
        await this.driver.wait(until.elementLocated(this.listArticle)).then(() => {
            return this.driver.findElement(this.listArticle).isDisplayed();
        });
    }

    async verifyListArticleHome(){
        await this.driver.findElement(this.listArticleHome).isDisplayed();
        return this;
    }

    async getTextFirstArticle(){
        await this.driver.wait(until.elementLocated(this.firstArticleHome)).then(async() => {
            await this.driver.findElement(this.firstArticleHome).getText().then(async(text) => {
                this.articleTitle = text;
                return this;
            });
        });
    }

    async verifyTitleArticle(){
        await this.driver.findElement(this.firstArticle).getText().then((text) =>{
            return assert.strictEqual(this.articleTitle, text);
        });
    }
}
