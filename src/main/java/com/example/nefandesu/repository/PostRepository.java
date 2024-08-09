package com.example.nefandesu.repository;

import com.example.nefandesu.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
