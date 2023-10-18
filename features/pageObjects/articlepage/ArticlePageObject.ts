import { WebDriver, By, until, WebElement } from 'selenium-webdriver';
import { AbstractPageObject } from '../AbstractPageObject';
import { driver } from '../../support/hook';
import assert from 'assert';

export class ArticlePageObject extends AbstractPageObject {
    private articleMenu = By.xpath('//div[contains(text(), "Artikel")]');

    private listArticle = By.xpath('//*[@id="app-layout"]/descendant::div[contains(@class, "flex gap-1")]');

    private searchBar = By.id('search-input');

    private articleSection = By.xpath('//*[@id="app-layout"]/child::div[2]/descendant::div[@class="text-base font-bold leading-5 m-0"]');

    private popUp = By.xpath('//*[@id="desktopBannerWrapped"]');

    constructor() {
        super(driver);
    }

    async openArticlePage() {
        const pageUrl: string = "https://primaku.com/articles";
        await this.driver.get(pageUrl).then(() => {
            return this.driver.findElement(this.articleMenu).isDisplayed();
        });
    }

    async verifyOnArticlePage(){
        await this.driver.wait(until.elementLocated(this.articleMenu)).then(() => {
            return this.driver.findElement(this.articleMenu).isDisplayed();
        });
    }

    async searchArticle(title: string){
        await this.driver.findElements(this.searchBar).then((element) => {
            return element.at(0)?.sendKeys(title);
        });
    }

    async verifyListArticle(){
        await this.driver.wait(until.elementLocated(this.listArticle)).then(async() => {
            await this.driver.findElements(this.listArticle).then((element) => {
                return element.at(0)?.isDisplayed();
            });
        });
    }

    async dismissPopUpIfExist(){
        await this.driver.wait(until.elementLocated(this.popUp)).then(async () => {
            await this.driver.findElement(this.popUp).isDisplayed().then(() => {
                return this.driver.findElement(this.popUp).click();
            });
        });
    }

    async verifyArticleTitleIsDisplayed(title: string){
        let isFind = false;
        await this.driver.wait(until.elementLocated(this.articleSection)).then(async (elements) =>{
            await elements.findElements(this.articleSection).then(async (element) => {
                const articleSize = element.length;
                try{
                    for(let i=0;i<articleSize;i++){
                        if(isFind == false){
                            await element.at(i)?.getText().then((result_title) => {
                                isFind = result_title.toLocaleLowerCase().includes(title.toLocaleLowerCase());
                            });
                        }else{
                            break;
                        }
                    }
                }catch(error){
                    if (error) {
                        return assert.strictEqual(isFind, true);
                    }
                }
                return assert.strictEqual(isFind, true);
            });
        });
    }
}
