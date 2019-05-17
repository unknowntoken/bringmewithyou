package com.bringMeWithYou.service;

import com.bringMeWithYou.entity.UserObject;
import com.bringMeWithYou.repository.Dao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    @Autowired
    @Qualifier("MySql")
    private Dao mySqlDao;

    public void newAccount(UserObject userObject) {
        if(userObject.getFirstName().equals("") || userObject.getLastName().equals("") || userObject.getUsername().equals("") || userObject.getPassword().equals("")){
            return;
        }
        mySqlDao.save(userObject);
    }
}