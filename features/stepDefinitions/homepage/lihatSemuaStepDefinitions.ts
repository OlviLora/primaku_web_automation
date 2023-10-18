import { Given, Then, When } from "@cucumber/cucumber";
import { HomePageObject } from "../../pageObjects/homepage/HomePageObject";

let homePage: HomePageObject;

  Given('user open primaKu homepage', {timeout: 2 * 5000},
    async function () {
      homePage = new HomePageObject();
      await homePage.openHomepage();
  });

  When('user is on primaKu homepage', 
    async function () {
      await homePage.verifyOnHomepage();
  });

  When('user dismiss the pop-up', 
    async function () {
      await homePage.dismissPopUpIfExist();
  });

  When('user clicks lihat semua', 
    async function () {
      await homePage.clickLihatSemua();
  });

  Then('user redirected to article menu', 
    async function () {
      await homePage.verifyInArticlePage();
  });

  When('user see list of article in homepage', 
    async function () {
      await homePage.verifyListArticleHome();
  });
  
  When('user see the title of first article', 
  async function () {
    await homePage.getTextFirstArticle();
  });

  When('user verify the title article in home and article is equal', 
    async function () {
      await homePage.verifyTitleArticle();
  });

  When('user see list of article', 
    async function () {
      await homePage.verifyListArticle();
  });
