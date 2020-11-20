package resources;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Properties;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Utils {

	public static RequestSpecification req;
	public RequestSpecification requestSpec() throws IOException
	{
		
		if(req==null)
		{
		PrintStream log=new PrintStream(new FileOutputStream("logging.txt"));  //logging.txt is the file where log object will paste all the logs

		//RestAssured.baseURI="https://rahulshettyacademy.com";
		
		
		req = new RequestSpecBuilder().setBaseUri(getProperties("baseURL"))
				.setContentType(ContentType.JSON).addQueryParam("key", "qaclick123")
				.addFilter(RequestLoggingFilter.logRequestTo(log)) //to take request logs and print in file
				.addFilter(ResponseLoggingFilter.logResponseTo(log))//to take response logs and print in file
				.build();
		
		return req;
		}
		return req;
	}
	
	public static String getProperties(String key) throws IOException
	{
		Properties prop=new Properties();
		FileInputStream fis=new FileInputStream("C:\\Users\\sadhy\\eclipse-workspace\\APIFramework\\src\\test\\java\\resources\\global.properties");
	    prop.load(fis);
	    return prop.getProperty(key);
	}
	
	
	public String getJSONresponse(Response response, String key)
	{
		String resp=response.asString();
		JsonPath js=new JsonPath(resp);
		return js.get(key).toString();
		
	}
}
