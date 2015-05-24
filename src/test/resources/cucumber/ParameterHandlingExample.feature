Feature: Smoke
  As a developer
  I want to navigate the app after every commit and submit 1 test


  Scenario: My First Scenario
    Given I go to zoo adoption website
    When I click on "contact_link"
    Then I should be on "Contact" page
    And I close the browser
    
  Scenario: My First Scenario
    Given I go to zoo adoption website
    When I click on "about_link"
    Then I should be on "About Zoo" page
    And I close the browser
    
  Scenario: My First Scenario
    Given I go to zoo adoption website
    When I click on "adoption_link"
    Then I should be on "Adoption" page
    And I close the browser  