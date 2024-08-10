package com.example.nefandesu.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class MainController {
    @GetMapping("/main")
    public String board() {
        return "crud-board"; // crud-board.html을 반환
    }

    @GetMapping("/login")
    public String login() {
        return "login"; // login.html을 반환
    }
}
