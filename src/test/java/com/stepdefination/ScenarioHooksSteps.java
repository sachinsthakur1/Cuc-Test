package com.stepdefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ScenarioHooksSteps {
	
	/*WebDriver driver = null;
	
	@Before
	public void testSetUp()
	{
		System.out.println("Setting up the start Scenario");
		//driver = new FirefoxDriver();
	}
	
	@After
	public void testExit()
	{
		System.out.println("Setting up the exit scenario");
		//driver.quit();
	}
	
	@Before("@web")
	public void testSetUpWeb()
	{
		System.out.println("Setting up the start Scenario with @web tag");
		driver = new FirefoxDriver();
	}
	
	@After("@web")
	public void testExitWeb()
	{
		System.out.println("Setting up the exit scenario with @web tag");
		driver.quit();
	}
	
	@Before("@dummy")
	public void testSetUpDummy()
	{
		System.out.println("Setting up the start Scenario with @dummy tag");
		driver = new FirefoxDriver();
	}
	
	@After("@dummy")
	public void testExitDummy()
	{
		System.out.println("Setting up the exit scenario with @dummy tag");
		driver.quit();
	}
	
	@Given("^I go to zoo adoption website$")
	public void i_go_to_zoo_adoption_website() throws Throwable {
		driver.navigate().to("http://www.thetestroom.com/webapp");
	}

	@When("^I click on contact link$")
	public void i_click_on_contact_link() throws Throwable {
		driver.findElement(By.id("contact_link")).click();
	}

	@When("^I populated the contact details$")
	public void i_populated_the_contact_details() throws Throwable {

		driver.findElement(By.name("name_field")).sendKeys("Test Name");
		driver.findElement(By.id("rinfo")).click();
		driver.findElement(By.id("cdona")).click();
		WebElement slider = driver.findElement(By
				.xpath("//div[@id='slider-1']/a"));
		Actions move = new Actions(driver);
		Action action = (Action) move.dragAndDropBy(slider, 30, 0).build();
		action.perform();
		driver.findElement(By.name("address_field")).sendKeys("Test Address");
		driver.findElement(By.name("postcode_field")).sendKeys("Test Postcode");
		driver.findElement(By.name("email_field")).sendKeys(
				"Testemail@testemail.com");
		driver.findElement(By.id("submit_message")).click();
	}

	@Then("^I should be on contact confirmation page$")
	public void i_should_be_on_contact_confirmation_page() throws Throwable {
		System.out.println("Page title" + driver.getTitle());
		System.out.println(driver.getTitle());
		Assert.assertTrue("You are not on contact_confirm page", driver
				.getTitle().equals("Contact Confirmation"));
	}*/
}
