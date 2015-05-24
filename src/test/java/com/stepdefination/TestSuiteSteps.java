package com.stepdefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSuiteSteps {

	@Given("^I start \"(.*?)\"$")
	public void i_start(String type) throws Throwable {
	    System.out.println("I start " + type);
	}

	@When("^I click on button$")
	public void i_click_on_button() throws Throwable {
		System.out.println("I click on button");
	}

	@Then("^I exit the Test$")
	public void i_exit_the_Test() throws Throwable {
		System.out.println("I exit the Test");
	}
}
