package com.bringMeWithYou.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface Dao<T> extends CrudRepository<T, Integer> {
}
