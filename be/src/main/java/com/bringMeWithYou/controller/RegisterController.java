package com.bringMeWithYou.controller;

import com.bringMeWithYou.entity.UserObject;
import com.bringMeWithYou.service.RegisterService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;

@RestController
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public void newAccount(@RequestBody UserObject user){
        registerService.newAccount(user);
    }
}
