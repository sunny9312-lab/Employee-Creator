package io.nology.appbackend.post;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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
		//replacing this with mapper
		Post newPost = new Post(postTitle, postCategory, postContent, postCreatedAt);
		
	    Post createdPost = this.postRepository.save(newPost);
	    System.out.println(createdPost.getId() + " id");
	    return createdPost;
		
	}
	public List<Post> findAll() {
		return this.postRepository.findAll();
		
	}
	//findById 는 해당 리스트가 없을수도 있으므로 optional이다. 
	public Optional<Post> findById(Long id){
		Optional<Post> maybePost = this.postRepository.findById(id);
		return maybePost;
	}
	
	public boolean deleteById(Long id) {
		Optional<Post> maybePost = this.findById(id);
		
		if(maybePost.isEmpty()) { //delete하려고 하는 id가 없는경우에는 204에러
			throw new NotException("");
		}
		
		if(maybePost.isEmpty()) { //delete하려고 하는 id가 없는경우에는 204에러
			return false;
		}
		
		this.postRepository.delete(maybePost.get());  //delete 하려는 id 있으면 지우고, true리턴
		return true;
	}
	
}
