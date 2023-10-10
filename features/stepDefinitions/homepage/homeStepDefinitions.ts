import { Given, Then, When } from "@cucumber/cucumber";
import { HomePageObject } from "../../pageObjects/homepage/HomePageObject";

let homePage: HomePageObject;

  Given('user open primaKu homepage', function () {
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
