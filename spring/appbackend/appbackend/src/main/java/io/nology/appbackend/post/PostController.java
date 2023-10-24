package io.nology.appbackend.post;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/posts")
public class PostController {
	
	@PostMapping
	// I am returning ResponseEntity because I want to have control over what status code
	//gets returned as part of HTTP response
	public void createPost(@Valid  @RequestBody CreatePostDTO data) {
		System.out.println(data);
		System.out.println(data.category);
		System.out.println(data.content);
		//this.postService.create(data);

	}

}
