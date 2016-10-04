package com.pearson.tn8.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		//tags = {"@mustAnswerToContinue"},
        format = { "pretty", "html:target/cucumber/html","json:target/cucumber/json/report.json" },
        glue = {"com.stepdefination"},
        features = "classpath:cucumber/ParameterHandlingExample.feature"
)

public class RunnerTest {

}                 
