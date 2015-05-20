package com.stepdefination;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Smoke_feature {

	@Given("^I go to zoo adoption website$")
	public void i_go_to_zoo_adoption_website() throws Throwable {
		System.out.println("I go to zoo adoption website");
	}

	@When("^I click on animal adoption link$")
	public void i_click_on_animal_adoption_link() throws Throwable {
	    System.out.println("I click on animal adoption link");
	}

	@Then("^I see no Animals available message$")
	public void i_see_no_Animals_available_message() throws Throwable {
	    System.out.println("I see no Animals available message");
	}
}
