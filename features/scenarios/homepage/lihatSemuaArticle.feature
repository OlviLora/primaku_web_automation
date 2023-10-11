@lihat_semua
Feature: Click Lihat Semua Article

  Scenario: User clicks lihat semua article
    Given user open primaKu homepage
    When user is on primaKu homepage
    And user dismiss the pop-up
    And user see list of article in homepage
    And user see the title of first article
    When user clicks lihat semua
    Then user redirected to article menu
    And user see list of article
    Then user verify the title article in home and article is equal
