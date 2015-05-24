package com.stepdefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.pageobjects.ConfirmationPage;
import com.pageobjects.ContactPage;
import com.pageobjects.HomePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PageObjectExampleSteps{
	
	WebDriver driver = new FirefoxDriver();
	HomePage homepage = new HomePage(driver);
	ContactPage contactpage;
	ConfirmationPage confrmpage;
	
	@Given("^PI go to zoo adoption website$")
	public void pi_go_to_zoo_adoption_website() throws Throwable {
		homepage.navigateToAppLink();
	}

	@When("^PI click on contact link$")
	public void pi_click_on_contact_link() throws Throwable {
		contactpage = homepage.navigateToContactPage();
	}

	@When("^PI populated the contact details$")
	public void pi_populated_the_contact_details() throws Throwable {
		contactpage.setContactName("Name").setContactAddress("address").setContactPostCode("postcode").setContactEmailId("e@e.com");
		confrmpage = contactpage.submitContactForm();
	}

	@Then("^PI should be on contact confirmation page$")
	public void pi_should_be_on_contact_confirmation_page() throws Throwable {
		confrmpage.verifyContactConfirmation();
	}
}
