package io.nology.appbackend.post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/posts")
public class PostController {
	
	@Autowired
	private PostService postService;
	//CREATE
	@PostMapping
	// I am returning ResponseEntity because I want to have control over what status code
	//gets returned as part of HTTP response
//	public Post createPost(@Valid  @RequestBody CreatePostDTO data) {
//		System.out.println(data);
//		System.out.println(data.category);
//		System.out.println(data.content);
//		return this.postService.create(data);
//	}
	public ResponseEntity<Post> createPost(@Valid @RequestBody CreatePostDTO data) {
		Post createdPost = this.postService.create(data);
		return new  ResponseEntity<>(createdPost, HttpStatus.CREATED);
		
	}
		
	//READ
	@GetMapping
	public ResponseEntity<List<Post>> getAll() {
	//	List<Post> allPosts = this.postService.findAll();
		return null;
	}
	

}
