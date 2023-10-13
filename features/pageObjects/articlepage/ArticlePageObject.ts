import { WebDriver, By, until, WebElement } from 'selenium-webdriver';
import { AbstractPageObject } from '../AbstractPageObject';
import { driver } from '../../support/hook';
import assert from 'assert';

export class ArticlePageObject extends AbstractPageObject {
    private articleMenu = By.xpath('//div[contains(text(), "Artikel")]');

    private listArticle = By.xpath('//*[@id="app-layout"]/descendant::div[contains(@class, "flex gap-1")]');

    private searchBar = By.id('search-input');

    private articleSection = By.xpath('//*[@id="app-layout"]/child::div[2]/descendant::div[@class="text-base font-bold leading-5 m-0"]');

    constructor() {
        super(driver);
    }

    openArticlePage() {
        const pageUrl: string = "https://primaku.com/articles";
        return this.driver.get(pageUrl).then(() => {
            return this.driver.findElement(this.articleMenu).isDisplayed();
        });
    }

    verifyOnArticlePage(){
        return this.driver.wait(until.elementLocated(this.articleMenu)).then(() => {
            return this.driver.findElement(this.articleMenu).isDisplayed();
        });
    }

    searchArticle(title: string){
        return this.driver.findElements(this.searchBar).then((element) => {
            return element.at(0)?.sendKeys(title);
        });
    }

    verifyListArticle(){
        return this.driver.wait(until.elementLocated(this.listArticle)).then(() => {
            return this.driver.findElement(this.listArticle).isDisplayed();
        });
    }

    verifyArticleTitleIsDisplayed(title: string){
        return this.driver.wait(until.elementLocated(this.articleSection)).then((elements) =>{
            return elements.findElements(this.articleSection).then((element) => {
                return element.at(0)?.getText().then((result_title) =>{
                    const isFind = result_title.toLocaleLowerCase().includes(title.toLocaleLowerCase());
                    return assert.strictEqual(isFind, true);
                });
            });
        });
    }
}
