package io.nology2.firstspringinto.greeting;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
//map all the HTTP requests to localhost:8080/greeting to this class
@RequestMapping("/greeting")
public class GreetingController {
	//Get, Post, Put/Patch, Delete

	//let's focus on Get
	@GetMapping 
	public String hello() {
		return "Hello, world!!! :)";
	}
	
	@GetMapping("/goodbye")   // http://localhost:8080/greeting/goodbye이런식으로 써줄수 있다
	public String goodbye() {
		return "Goodbye, world";
	}
	//dynamic route	
	//Hello, name  :user명이 주소뒤에 붙으면, Hello user명을 출력해 준다. 
	@GetMapping("/{name}")
	public String helloWithName(@PathVariable  String name) {
		return String.format("Hello, %s" , name);
	}
	
}
