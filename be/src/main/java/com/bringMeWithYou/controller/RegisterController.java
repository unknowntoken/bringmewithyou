package com.bringMeWithYou.controller;

import com.bringMeWithYou.entity.UserObject;
import com.bringMeWithYou.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bring")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @RequestMapping(value = "/newaccount/{username}/{firstName}/{lastName}/{password}", method = RequestMethod.POST)
    public void newAccount(@PathVariable String username, @PathVariable String firstName, @PathVariable String lastName, @PathVariable String password){
        registerService.newAccount(new UserObject(username, firstName, lastName, password));
    }
}
