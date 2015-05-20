$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/Test.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the proctor is able to open and close section remotely when remoteSectionControl is true and also the rules around submitting the section when disableExit is either true or false",
  "description": "",
  "id": "verify-the-proctor-is-able-to-open-and-close-section-remotely-when-remotesectioncontrol-is-true-and-also-the-rules-around-submitting-the-section-when-disableexit-is-either-true-or-false",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "I have a two section form published with section 1 having remoteSectionControl as \u0027true\u0027, disableExit as \u0027true\u0027 and section 2 having remoteSectionControl as \u0027true\u0027, disableExit as \u0027false\u0027",
  "description": "",
  "id": "verify-the-proctor-is-able-to-open-and-close-section-remotely-when-remotesectioncontrol-is-true-and-also-the-rules-around-submitting-the-section-when-disableexit-is-either-true-or-false;i-have-a-two-section-form-published-with-section-1-having-remotesectioncontrol-as-\u0027true\u0027,-disableexit-as-\u0027true\u0027-and-section-2-having-remotesectioncontrol-as-\u0027true\u0027,-disableexit-as-\u0027false\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I start a test with testname \u003ctestid\u003e and formname \u003cform id\u003e with the sections closed",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#We already have the following step to login. So if we want the section closed form then we need to ensure that the formId and TestId we give as input has the section closed"
    }
  ],
  "line": 5,
  "name": "I start a linear test with TestName \"TNAVA-36-arf-l3\" and FormName \"TNAVA-36-arf-l3\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#When I am on the start section screen"
    },
    {
      "line": 7,
      "value": "#I think this step should be the part of step implementation for �I start the section 1� instead of having one more step so that the maintenance will be less"
    },
    {
      "line": 8,
      "value": "#And I try to start the section 1"
    },
    {
      "line": 9,
      "value": "#We already have a test for entering a section � �I start section \u003csection id\u003e� so I think we should be using that one only"
    },
    {
      "line": 10,
      "value": "#Then I should get an error 2011 and not be able to start the section 1"
    }
  ],
  "line": 11,
  "name": "I should get an error 2011",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#James suggested last time that We should not have a negative verification as it will add on the maintenance, here we can just verify if the error exists?"
    }
  ],
  "line": 13,
  "name": "the proctor opens the section 1",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be able to start the section 1",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#We already have a test for entering a section � �I start section \u003csection id\u003e� so I think we should be using that one only"
    }
  ],
  "line": 16,
  "name": "I navigate thru all the items",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am on the end section screen",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#we already have a step �I navigate thru all the items to end section page�"
    },
    {
      "line": 19,
      "value": "#Then I should NOT be able to submit the section 1"
    }
  ],
  "line": 20,
  "name": "I submit section \u003csectionID\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#We have a case �I submit section \u003csectionID\u003e�"
    }
  ],
  "line": 22,
  "name": "I should get an error 2012",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#I am still on end section page"
    }
  ],
  "line": 24,
  "name": "the proctor closes the section 1",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I navigate",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#We have a step for �I navigate to item \u003citemid\u003e�"
    },
    {
      "line": 27,
      "value": "#Then I should be get a prompt to submit the section 1"
    },
    {
      "line": 28,
      "value": "#And I am able to successfully submit section 1"
    },
    {
      "line": 29,
      "value": "#This step also verifies that the section is submitted successfully by ensuring that you are on start section page for the next section"
    }
  ],
  "line": 30,
  "name": "I see Section Close warning promt and I submit the section",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#Do we need this verification as the next step would verify if I am on the Start section page or not"
    }
  ],
  "line": 32,
  "name": "I am on the start section 2 screen",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the proctor has not opened the section 2",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "#Its a negative testcase I think we not require"
    }
  ],
  "line": 35,
  "name": "I should get an error and not be able to start section 2",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the proctor opens section 2",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should be able to start the section 2",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#We already have a test for entering a section � �I start section \u003csection id\u003e� so I think we should be using that one only"
    }
  ],
  "line": 39,
  "name": "I navigate thru all the items",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I am on the end section screen",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should be able to submit the section 2",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("cucumber/smoke.feature");
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
  "name": "I click on contact link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I populated the contact details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be on contact confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke_feature.i_go_to_zoo_adoption_website()"
});
formatter.result({
  "duration": 7782063742,
  "status": "passed"
});
formatter.match({
  "location": "Smoke_feature.i_click_on_contact_link()"
});
formatter.result({
  "duration": 1251659771,
  "status": "passed"
});
formatter.match({
  "location": "Smoke_feature.i_populated_the_contact_details()"
});
formatter.result({
  "duration": 2098956787,
  "status": "passed"
});
formatter.match({
  "location": "Smoke_feature.i_should_be_on_contact_confirmation_page()"
});
formatter.result({
  "duration": 42705731,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003cYou are not on contact_confirm page\u003e but was:\u003ctrue\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:86)\r\n\tat com.stepdefination.Smoke_feature.i_should_be_on_contact_confirmation_page(Smoke_feature.java:57)\r\n\tat ✽.Then I should be on contact confirmation page(cucumber/smoke.feature:10)\r\n",
  "status": "failed"
});
});