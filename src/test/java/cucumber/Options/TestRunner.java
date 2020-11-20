package cucumber.Options;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",
		plugin= {"pretty",
				"json:target/jsonReports/cucumber.json"}, //this plugin generates a json format report file which acts as an input to the reporting plugin 
		glue = {"stepDefinition"})  //tags= {"@DeletePlace"}
//mvn test -Dcucumber.options="--tags @Addplace"     use this to pass tag directly in maven
public class TestRunner {

}
