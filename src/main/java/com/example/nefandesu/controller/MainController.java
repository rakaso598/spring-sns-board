package com.example.nefandesu.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class MainController {
    @GetMapping("/main-readonly")
    public String mainReadonly() {
        return "crud-board-readonly";
    }

    @GetMapping("/main")
    public String main() {
        return "crud-board";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }
}
