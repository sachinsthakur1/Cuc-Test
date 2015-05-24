$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/ParameterHandlingExample.feature");
formatter.feature({
  "id": "smoke",
  "description": "As a developer\r\nI want to navigate the app after every commit and submit 1 test",
  "name": "Smoke",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "smoke;my-first-scenario",
  "description": "",
  "name": "My First Scenario",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I go to zoo adoption website",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I click on \"Contact Link\"",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "I should be on contact \"Contact\" page",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "location": "Smoke_feature.i_go_to_zoo_adoption_website()"
});
formatter.result({
  "duration": 127971017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Link",
      "offset": 12
    }
  ],
  "location": "ParameterHandlingExampleSteps.i_click_on(String)"
});
formatter.result({
  "duration": 2872722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 24
    }
  ],
  "location": "ParameterHandlingExampleSteps.i_should_be_on_contact_page(String)"
});
formatter.result({
  "duration": 187671,
  "status": "passed"
});
formatter.scenario({
  "id": "smoke;my-first-scenario",
  "description": "",
  "name": "My First Scenario",
  "keyword": "Scenario",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "I go to zoo adoption website",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "I click on \"Adoption Link\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "I should be on contact \"Adoption\" page",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "location": "Smoke_feature.i_go_to_zoo_adoption_website()"
});
formatter.result({
  "duration": 29324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adoption Link",
      "offset": 12
    }
  ],
  "location": "ParameterHandlingExampleSteps.i_click_on(String)"
});
formatter.result({
  "duration": 184249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adoption",
      "offset": 24
    }
  ],
  "location": "ParameterHandlingExampleSteps.i_should_be_on_contact_page(String)"
});
formatter.result({
  "duration": 141241,
  "status": "passed"
});
formatter.scenario({
  "id": "smoke;my-first-scenario",
  "description": "",
  "name": "My First Scenario",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I go to zoo adoption website",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "I click on \"Conrm Link\"",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "I should be on contact \"Conrm\" page",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "location": "Smoke_feature.i_go_to_zoo_adoption_website()"
});
formatter.result({
  "duration": 45451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conrm Link",
      "offset": 12
    }
  ],
  "location": "ParameterHandlingExampleSteps.i_click_on(String)"
});
formatter.result({
  "duration": 168610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conrm",
      "offset": 24
    }
  ],
  "location": "ParameterHandlingExampleSteps.i_should_be_on_contact_page(String)"
});
formatter.result({
  "duration": 149549,
  "status": "passed"
});
});