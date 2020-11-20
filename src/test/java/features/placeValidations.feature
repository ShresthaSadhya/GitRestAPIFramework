Feature: Validating Place API's

@Addplace
Scenario Outline: Verify if Place is being Successfully added using AddPlaceAPI

Given Add Place Payload with "<name>" "<language>" "<address>"
When user calls "AddPlaceAPI" with "Post" http request
Then the API call is success with status code 200
And "status" in response body is "OK"
And "scope" in response body is "APP"
And verify place_Id created maps to "<name>" with "GetPlaceAPI"

Examples:
|name       |language      |address           |
|AAhouse    |English       |World trade center|
#|West house |French        |New Horizon Tower |

@DeletePlace
Scenario: Verify Delete place API is working 

Given DeletePlace payload
When user calls "DeletePlaceAPI" with "Post" http request
Then the API call is success with status code 200
And "status" in response body is "OK"