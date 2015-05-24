package com.stepdefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class MultipleStepDefinationAbstract {
	protected static WebDriver driver;
	
	protected WebDriver getDriverInstance()
	{
		if(driver == null)
		{
			driver = new FirefoxDriver();
		}
		return driver;
	}
	
	

}
