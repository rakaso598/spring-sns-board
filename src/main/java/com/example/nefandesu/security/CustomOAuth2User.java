package com.example.nefandesu.security;

import com.example.nefandesu.entity.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Slf4j
public class CustomOAuth2User implements OAuth2User {

    private final Map<String, Object> attributes;
    private final Member member;

    public CustomOAuth2User(Map<String, Object> attributes, Member member) {
        this.attributes = Objects.requireNonNull(attributes, "attributes cannot be null");
        this.member = Objects.requireNonNull(member, "member cannot be null");
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // 실제 권한을 반환하도록 수정
        return List.of();
    }

    @Override
    public String getName() {
        return member.getMemberName();
    }

    public Member getMember() {
        return member;
    }
}
