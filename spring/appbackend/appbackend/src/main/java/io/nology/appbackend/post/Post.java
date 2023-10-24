package io.nology.appbackend.post;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

@Entity 
@Table(name = "posts")
//@NoArgsConstructor
public class Post {
	// add a property that will be my primary key
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	//여기까지만 하고 sql 서버 확인하면,  employeeapp db에 posts테이블에 id가 자동으로 생성되어 있다. 
	//all the properties I add here will be columns in the database
	//in the posts table
	@Column
	private String title;
	
	//maybe this could be done differently in the future? a separate table
	@Column
	//@Getter
	//@Setter
	private String category;
	
	@Column
	//@Getter
	//@Setter
	private String content;
	
	@Column 
	private Date createdAt;
	//noargsconstructor랑 똑같은것. 
	public Post() {}
	
	public Post(String title, String category, String content, Date createdAt) {
		this.title = title;
		this.category = category;
		this.content = content;
		this.createdAt = createdAt;
	}
	
	
	
	public Long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	
	
}
