package com.pageobjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ConfirmationPage extends PageAbstract{

	public ConfirmationPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	
	public ConfirmationPage verifyContactConfirmation()
	{
		System.out.println("Message : " + driver.findElement(By.cssSelector(".content h1")).getText());
		Assert.assertTrue("You are not on contact confirmation page", driver.findElement(By.cssSelector(".content h1")).getText().trim().equals("We have your message"));
		return new ConfirmationPage(driver);
	}

}
