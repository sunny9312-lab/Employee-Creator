package io.nology.appbackend.post;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.nology.appbackend.exception.NotFoundException;
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
		List<Post> allPosts = this.postService.findAll();
		return new ResponseEntity<>(allPosts, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Post> getById(@PathVariable Long id) {
		Optional<Post> foundPost = this.postService.findById(id);
		if(foundPost.isEmpty()) {
			throw new NotFoundException(String.format("Post with id:%s not found", id));
			
		}
		return new ResponseEntity<>(foundPost.get(), HttpStatus.OK);
		
	}
//update
	
	//delete
	//return 204 - success, no content
	@DeleteMapping("/{id}")
	public ResponseEntity<Post> deleteById(Long id) {
		//this.postService.deleteById(id);
		boolean deleted = this.postService.deleteById(id);
		if(!deleted) {
			throw new NotFoundException(String.format("Post with id: %s not found, could not delete", id));
		}
		return null;
	}
}
