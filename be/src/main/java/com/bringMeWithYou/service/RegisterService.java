package com.bringMeWithYou.service;

import com.bringMeWithYou.entity.UserObject;
import com.bringMeWithYou.repository.Dao;
import com.bringMeWithYou.repository.MySqlDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    @Autowired
    @Qualifier("MySql")
    private Dao mySqlDao;

    public void newAccount(UserObject userObject) {
        mySqlDao.save(userObject);
    }
}
