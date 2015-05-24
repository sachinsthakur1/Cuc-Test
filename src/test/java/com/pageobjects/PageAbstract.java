package com.pageobjects;

import org.openqa.selenium.WebDriver;

public class PageAbstract {
	
	protected WebDriver driver;
	
	public PageAbstract(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public HomePage navigateToAppLink()
	{
		driver.navigate().to("http://www.thetestroom.com/webapp");
		return new HomePage(driver);
	}
	
	/*public ContactPage clickContactLink()
	{
		
	}*/
}
