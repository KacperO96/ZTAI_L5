package com.example.demo.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/posts")
    public List<Post> getAllPosts(){
        return postService.getAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/post/{id}")
    public Post getPost(@PathVariable int id){
        return postService.getPost(id);
    }
}
