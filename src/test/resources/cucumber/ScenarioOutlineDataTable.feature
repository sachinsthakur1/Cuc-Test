Feature: Smoke 
	As a developer
  I want to navigate the app after every commit and submit 1 test


Scenario Outline: My First scenario 
	Given I go to zoo adoption website 
	When I click on <Link> p,
	Then I should be on <Title> page 
	And I close the browser 
	Examples: 
		| Link    			| Title         |
		| contact_link     	| Contact       |
		| about_link  		| About Zoo     |
		| adoption_link 	| Adoption      |
		| home_link  		| Home 			|
		