package com.example.nefandesu.security.service;

import com.example.nefandesu.entity.Member;
import com.example.nefandesu.repository.MemberRepository;
import com.example.nefandesu.security.CustomOAuth2User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final MemberRepository memberRepository;

    public CustomOAuth2UserService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        // 사용자 정보 추출
        String email = oAuth2User.getAttribute("email");
        String memberName = oAuth2User.getAttribute("name");

        // 데이터베이스에 사용자가 없으면 저장
        saveUser(email, memberName);

        // CustomOAuth2User 객체 생성
        return createCustomOAuth2User(oAuth2User);
    }


    private CustomOAuth2User createCustomOAuth2User(OAuth2User oAuth2User) {
        String email = oAuth2User.getAttribute("email");
        String memberName = oAuth2User.getAttribute("name");

        // 사용자 정보를 데이터베이스에서 조회
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new OAuth2AuthenticationException("User not found"));

        // CustomOAuth2User 객체 생성
        return new CustomOAuth2User(oAuth2User.getAttributes(), member);
    }

    private void saveUser(String email, String memberName) {
        Optional<Member> memberOptional = memberRepository.findByEmail(email);
        if (!memberOptional.isPresent()) {
            Member member = new Member();
            member.setEmail(email);
            member.setMemberName(memberName);
            memberRepository.save(member);
        }
    }
}
