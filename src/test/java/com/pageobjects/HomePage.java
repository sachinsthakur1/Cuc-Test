package com.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage extends PageAbstract{

	public HomePage(WebDriver driver) {
		super(driver);
	}

	public ContactPage navigateToContactPage()
	{
		driver.findElement(By.id("contact_link")).click();
		return new ContactPage(driver);
	}
}
