package com.stepdefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.When;

public class MultipleStepDefinationGooglePageSteps extends MultipleStepDefinationAbstract {
	
	WebDriver driver = getDriverInstance();
	
	@When("^I search for kites$")
	public void i_search_for_kites() throws Throwable {
	    driver.findElement(By.id("lst-ib")).sendKeys("hell");
	    driver.findElement(By.name("btnG")).click();
	}
}
