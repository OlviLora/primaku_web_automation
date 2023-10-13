import { Given, Then, When } from "@cucumber/cucumber";
import { ArticlePageObject } from "../../pageObjects/articlepage/ArticlePageObject";

let articlePage: ArticlePageObject;

  Given('user open article page', {timeout: 2 * 5000}, function () {
    articlePage = new ArticlePageObject();
    return articlePage.openArticlePage();
  });

  Then('user is on article page', function () {
    return articlePage.verifyOnArticlePage();
  });

  When('user search article with title {string}', function (title: string) {
    return articlePage.searchArticle(title);
  });

  Then('user see list of article in article page', function () {
    return articlePage.verifyListArticle();
  });

  Then('user see article with title {string}', function (title: string) {
    return articlePage.verifyArticleTitleIsDisplayed(title);
  });