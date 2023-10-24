package io.nology.appbackend.post;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PostService {
	
	public Post create(CreatePostDTO data) {
		// Business logic - I want to trim all string coming from data
		// clean up data
		String postTitle = data.getTitle().trim();
		
		
		
	}

}
