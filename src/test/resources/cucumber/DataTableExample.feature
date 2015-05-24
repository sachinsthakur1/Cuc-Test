Feature: Smoke
  As a developer
  I want to navigate the app after every commit and submit 1 test


  Scenario: My First Scenario
    Given I go to zoo adoption website
    When I click on contact link
    And I populated the contact details
    | Field    | Value                 |
    | Name     | Adam                  |
    | Address  | Adam address          |
    | Postcode | 201201                |
    | EmailId  | Subcribe@testteam.com |
    Then I should be on contact confirmation page
    
   