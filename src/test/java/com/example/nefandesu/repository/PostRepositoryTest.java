//package com.example.nefandesu.repository;
//
//import com.example.nefandesu.entity.Member;
//import com.example.nefandesu.entity.Post;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.transaction.annotation.Transactional;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@SpringBootTest
//@Transactional
//public class PostRepositoryTest {
//
//    @Autowired
//    private PostRepository postRepository;
//
//    @Autowired
//    private MemberRepository memberRepository;
//
//    @Test
//    public void testGetMemberName() {
//        // Given
//        Member member = new Member();
//        member.setMemberName("John Doe");
//        member = memberRepository.save(member);
//
//        Post post = new Post();
//        post.setTitle("Test Title");
//        post.setContent("Test Content");
//        post.setMember(member);
//        post = postRepository.save(post);
//
//        // When
//        Post foundPost = postRepository.findById(post.getId()).orElse(null);
//
//        // Then
//        assertThat(foundPost).isNotNull();
//        // JPA 엔터티 탐색을 위한 assert
//        assertThat(foundPost.getMember().getMemberName()).isEqualTo("John Doe");
//    }
//}
