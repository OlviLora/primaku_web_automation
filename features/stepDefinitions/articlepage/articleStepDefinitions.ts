import { Given, Then, When } from "@cucumber/cucumber";
import { ArticlePageObject } from "../../pageObjects/articlepage/ArticlePageObject";

let articlePage: ArticlePageObject;

  Given('user open article page', {timeout: 2 * 5000}, 
  async function () {
    articlePage = new ArticlePageObject();
    await articlePage.openArticlePage();
  });

  Then('user is on article page', 
  async function () {
    await articlePage.verifyOnArticlePage();
  });

  When('user dismiss the pop-up in article', 
    async function () {
      await articlePage.dismissPopUpIfExist();
  });

  When('user search article with title {string}', 
  async function (title: string) {
    await articlePage.searchArticle(title);
  });

  Then('user see list of article in article page', 
  async function () {
    await articlePage.verifyListArticle();
  });

  Then('user see article with title {string}', 
  async function (title: string) {
    await articlePage.verifyArticleTitleIsDisplayed(title);
  });