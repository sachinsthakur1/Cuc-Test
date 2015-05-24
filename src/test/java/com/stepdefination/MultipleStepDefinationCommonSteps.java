package com.stepdefination;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class MultipleStepDefinationCommonSteps extends MultipleStepDefinationAbstract{

	WebDriver driver = getDriverInstance();
	
	@Given("^I login to Google$")
	public void i_login_to_Google() throws Throwable {
	    driver.navigate().to("http://www.google.com");
	}

	@Then("^I close browser$")
	public void i_close_browser() throws Throwable {
	   driver.quit();
	}
}
