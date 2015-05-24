Feature: Smoke
  As a developer
  I want to navigate the app after every commit and submit 1 test
  
  Scenario: My First Scenario
    Given PI go to zoo adoption website
    When PI click on contact link
    And PI populated the contact details
    Then PI should be on contact confirmation page
    
   