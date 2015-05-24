package com.pearson.tn8.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		tags = {"@Multiple"},
        format = { "pretty", "html:target/cucumber/html","json:target/cucumber/json/report.json" },
        features = "classpath:cucumber/",
        glue = {"com.stepdefination"}
        
)

public class MultipleStepDefRunnerTest {

}
