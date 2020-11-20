$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("placeValidations.feature");
formatter.feature({
  "line": 1,
  "name": "Validating Place API\u0027s",
  "description": "",
  "id": "validating-place-api\u0027s",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify if Place is being Successfully added using AddPlaceAPI",
  "description": "",
  "id": "validating-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplaceapi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Addplace"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Add Place Payload with \"\u003cname\u003e\" \"\u003clanguage\u003e\" \"\u003caddress\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user calls \"AddPlaceAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify place_Id created maps to \"\u003cname\u003e\" with \"GetPlaceAPI\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "validating-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplaceapi;",
  "rows": [
    {
      "cells": [
        "name",
        "language",
        "address"
      ],
      "line": 14,
      "id": "validating-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplaceapi;;1"
    },
    {
      "cells": [
        "AAhouse",
        "English",
        "World trade center"
      ],
      "line": 15,
      "id": "validating-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplaceapi;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Verify if Place is being Successfully added using AddPlaceAPI",
  "description": "",
  "id": "validating-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplaceapi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Addplace"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Add Place Payload with \"AAhouse\" \"English\" \"World trade center\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user calls \"AddPlaceAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "\"scope\" in response body is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify place_Id created maps to \"AAhouse\" with \"GetPlaceAPI\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "AAhouse",
      "offset": 24
    },
    {
      "val": "English",
      "offset": 34
    },
    {
      "val": "World trade center",
      "offset": 44
    }
  ],
  "location": "StepDefinition.add_Place_Payload_with(String,String,String)"
});
formatter.result({
  "duration": 933422900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPlaceAPI",
      "offset": 12
    },
    {
      "val": "Post",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_calls_with_http_request(String,String)"
});
formatter.result({
  "duration": 5927264600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "StepDefinition.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "duration": 1929200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 30
    }
  ],
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 475095100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scope",
      "offset": 1
    },
    {
      "val": "APP",
      "offset": 29
    }
  ],
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 9108700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAhouse",
      "offset": 33
    },
    {
      "val": "GetPlaceAPI",
      "offset": 48
    }
  ],
  "location": "StepDefinition.verify_place_Id_created_maps_to_with(String,String)"
});
formatter.result({
  "duration": 3636832200,
  "status": "passed"
});
formatter.before({
  "duration": 43100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 16,
      "value": "#|West house |French        |New Horizon Tower |"
    }
  ],
  "line": 19,
  "name": "Verify Delete place API is working",
  "description": "",
  "id": "validating-place-api\u0027s;verify-delete-place-api-is-working",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@DeletePlace"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "DeletePlace payload",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user calls \"DeletePlaceAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "\"status\" in response body is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.deleteplace_payload()"
});
formatter.result({
  "duration": 1833600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DeletePlaceAPI",
      "offset": 12
    },
    {
      "val": "Post",
      "offset": 34
    }
  ],
  "location": "StepDefinition.user_calls_with_http_request(String,String)"
});
formatter.result({
  "duration": 2137399400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "StepDefinition.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "duration": 172100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 30
    }
  ],
  "location": "StepDefinition.in_response_body_is(String,String)"
});
formatter.result({
  "duration": 25001200,
  "status": "passed"
});
});