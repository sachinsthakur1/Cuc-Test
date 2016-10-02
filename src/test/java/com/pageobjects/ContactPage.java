package com.pageobjects;

import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;

public class ContactPage extends PageAbstract{

	public ContactPage(WebDriver driver) {
		super(driver);
	}
	
	public ContactPage setContactName(String name)
	{
		driver.findElement(By.name("name_field")).sendKeys(name);;
		return new ContactPage(driver);
	}
	
	public ContactPage setContactAddress(String address)
	{
		driver.findElement(By.name("address_field")).sendKeys(address);;
		return new ContactPage(driver);
	}
	
	public ContactPage setContactPostCode(String postcode)
	{
		driver.findElement(By.name("postcode_field")).sendKeys(postcode);;
		return new ContactPage(driver);
	}
	
	public ContactPage setContactEmailId(String email)
	{
		driver.findElement(By.name("email_field")).sendKeys(email);;
		return new ContactPage(driver);
	}
	
	public ConfirmationPage submitContactForm()
	{
		driver.findElement(By.id("submit_message")).click();
		return new ConfirmationPage(driver);
	}

}
