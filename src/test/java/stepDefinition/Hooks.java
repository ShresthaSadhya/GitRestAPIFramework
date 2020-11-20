package stepDefinition;

import cucumber.api.java.Before;

public class Hooks {
	
	@Before("@DeletePlace")
	public void beforeDelete() throws Throwable
	{
		StepDefinition step=new StepDefinition();
		
		if(StepDefinition.placeID==null) {
		step.add_Place_Payload_with("Sadhya", "Shrestha", "Switzerland");
		step.user_calls_with_http_request("AddPlaceAPI", "POST");
		step.verify_place_Id_created_maps_to_with("Sadhya", "GetPlaceAPI");
		
	}
	}

}
