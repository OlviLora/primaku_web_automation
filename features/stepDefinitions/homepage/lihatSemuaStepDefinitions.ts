import { Given, Then, When } from "@cucumber/cucumber";
import { HomePageObject } from "../../pageObjects/homepage/HomePageObject";

let homePage: HomePageObject;

  Given('user open primaKu homepage', {timeout: 2 * 5000}, function () {
    homePage = new HomePageObject();
    return homePage.openHomepage();
  });
  
  When('user is on primaKu homepage', function () {
    return homePage.verifyOnHomepage();
  });
  
  When('user dismiss the pop-up', function () {
    return homePage.dismissPopUpIfExist();
  });
  
  When('user clicks lihat semua', function () {
    return homePage.clickLihatSemua();
  });
  
  Then('user redirected to article menu', function () {
    return homePage.verifyInArticlePage();
  });
  
  When('user see list of article', function () {
    return homePage.verifyListArticle();
  }); 

  When('user see list of article in homepage', function () {
    return homePage.verifyListArticleHome();
  }); 

  When('user see the title of first article', function () {
    return homePage.getTextFirstArticle();
  }); 

  When('user verify the title article in home and article is equal', function () {
    return homePage.verifyTitleArticle();
  }); 
