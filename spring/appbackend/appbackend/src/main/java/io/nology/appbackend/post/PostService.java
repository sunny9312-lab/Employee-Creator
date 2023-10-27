package io.nology.appbackend.post;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PostService {
	//dependency injection
	@Autowired
	private PostRepository postRepository;
	
	public Post create(CreatePostDTO data) {
		// Business logic - I want to trim all string coming from data
		// clean up data before create my Post
		String postTitle = data.getTitle().trim();
		String postContent = data.getContent().trim();
		String postCategory = data.getCategory().trim();
		Date postCreatedAt = new Date();
		
		Post newPost = new Post(postTitle, postCategory, postContent, postCreatedAt);
		
	    Post createdPost = this.postRepository.save(newPost);
	    System.out.println(createdPost.getId());
	    return createdPost;
		
	}

}
