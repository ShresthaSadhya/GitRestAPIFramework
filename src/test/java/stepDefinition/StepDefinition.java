package stepDefinition;

import static io.restassured.RestAssured.given;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.junit.runner.RunWith;
import static org.junit.Assert.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import resources.APIResources;
import resources.TestDataBuild;
import resources.Utils;

@RunWith(Cucumber.class)
public class StepDefinition extends Utils {

	TestDataBuild data = new TestDataBuild();

	RequestSpecification re;
	ResponseSpecification res;
	Response response;
	public static String placeID; //we need to make the placeid static because it will be used in the next scenario to verify deleteapi...so it must holds its value.

	@Given("^Add Place Payload with \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void add_Place_Payload_with(String name, String language, String address) throws IOException {
		// Write code here that turns the phrase above into concrete actions

		re = given().spec(requestSpec()).body(data.addPlacePayload(name, language, address));

	}

	@When("^user calls \"([^\"]*)\" with \"([^\"]*)\" http request$")
	public void user_calls_with_http_request(String resource, String method) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		APIResources resourceAPI = APIResources.valueOf(resource); // constructor will be called with value of method
																	// with the resource u pass- addplace/deleteplace
																	// etc

		res = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();

		if (method.equalsIgnoreCase("POST")) {
			response = re.when().post(resourceAPI.getResource());
		} else if (method.equalsIgnoreCase("GET"))
			response = re.when().get(resourceAPI.getResource());

	}

	@Then("^the API call is success with status code (\\d+)$")
	public void the_API_call_is_success_with_status_code(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		assertEquals(response.getStatusCode(), 200);
	}

	@Then("^\"([^\"]*)\" in response body is \"([^\"]*)\"$")
	public void in_response_body_is(String keyValue, String expectedValue) throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		assertEquals(getJSONresponse(response, keyValue), expectedValue);
	}

	@Then("^verify place_Id created maps to \"([^\"]*)\" with \"([^\"]*)\"$")
	public void verify_place_Id_created_maps_to_with(String actualName, String resourceAPI) throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		placeID = getJSONresponse(response, "place_id");
		re = given().spec(requestSpec()).queryParam("place_id", placeID);
		user_calls_with_http_request(resourceAPI, "GET");

		String name = getJSONresponse(response, "name");

		assertEquals(name, actualName);

	}

	@Given("^DeletePlace payload$")
	public void deleteplace_payload() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		re=given().spec(requestSpec()).body(data.deletePayload(placeID));
	}

}
