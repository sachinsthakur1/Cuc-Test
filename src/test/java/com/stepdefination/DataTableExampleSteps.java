package com.stepdefination;

import java.util.HashMap;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataTableExampleSteps {
	
	/*WebDriver driver = null;

	@Given("^I go to zoo adoption website$")
	public void i_go_to_zoo_adoption_website() throws Throwable {
		driver = new FirefoxDriver();
		driver.navigate().to("http://www.thetestroom.com/webapp");
	}

	@When("^I click on contact link$")
	public void i_click_on_contact_link() throws Throwable {
		driver.findElement(By.id("contact_link")).click();
	}

	@When("^I populated the contact details$")
	public void i_populated_the_contact_details(DataTable table) throws Throwable {
		System.out.println(table);
		List<List<String>> list = table.raw();
		System.out.println(list.get(0).get(1));
		driver.findElement(By.name("name_field")).sendKeys(list.get(1).get(1));
		driver.findElement(By.id("rinfo")).click();
		driver.findElement(By.id("cdona")).click();
		WebElement slider = driver.findElement(By.xpath("//div[@id='slider-1']/a"));
        Actions move = new Actions(driver);
        Action action = (Action) move.dragAndDropBy(slider, 30, 0).build();
        action.perform();
		driver.findElement(By.name("address_field")).sendKeys(list.get(2).get(1));
		driver.findElement(By.name("postcode_field")).sendKeys(list.get(3).get(1));
		driver.findElement(By.name("email_field")).sendKeys(list.get(4).get(1));
		driver.findElement(By.id("submit_message")).click();
	}

	@Then("^I should be on contact confirmation page$")
	public void i_should_be_on_contact_confirmation_page() throws Throwable {
		System.out.println("Page title"+driver.getTitle());
		System.out.println(driver.getTitle());
		Assert.assertTrue("You are not on contact_confirm page", driver.getTitle().equals("Contact Confirmation"));
		driver.quit();
	}*/
}
