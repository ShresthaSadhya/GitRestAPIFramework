package resources;

import java.util.ArrayList;
import java.util.List;

import pojo.Location;
import pojo.Serialization;

public class TestDataBuild {
	
	public Serialization addPlacePayload(String name, String language, String address)
	{
		Serialization s = new Serialization();
		s.setAccuracy(50);
		s.setAddress(address);
		s.setLanguage(language);
		s.setPhone_number("(+91) 983 893 3937");
		s.setWebsite("https://rahulshettyacademy.com");
		s.setName(name);
		List<String> type = new ArrayList<String>();
		type.add("shoe park");
		type.add("shop");
		s.setTypes(type);
		Location l = new Location();
		l.setLat(-38.383494);
		l.setLng(33.427362);
		s.setLocation(l);
		
		return s;
	}
	
	
	public String deletePayload(String placeId)
	{
		return "{\r\n \"place_id\":\""+placeId+"\"\r\n}";
	}

}
