@primaku @article @search_article
Feature: Search Article

  Scenario: User search article and verify the article is displayed
    Given user open article page
    And user is on article page
    And user dismiss the pop-up in article
    When user search article with title "anak"
    Then user see list of article in article page
    And user see article with title "anak"
