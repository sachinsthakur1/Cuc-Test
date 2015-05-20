$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/smoke.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke",
  "description": "As a developer\r\nI want to navigate the app after every commit and submit 1 test",
  "id": "smoke",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "My First Scenario",
  "description": "",
  "id": "smoke;my-first-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I go to zoo adoption website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on animal adoption link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I see no Animals available message",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke_feature.i_go_to_zoo_adoption_website()"
});
formatter.result({
  "duration": 92122389,
  "status": "passed"
});
formatter.match({
  "location": "Smoke_feature.i_click_on_animal_adoption_link()"
});
formatter.result({
  "duration": 131246,
  "status": "passed"
});
formatter.match({
  "location": "Smoke_feature.i_see_no_Animals_available_message()"
});
formatter.result({
  "duration": 153949,
  "status": "passed"
});
});