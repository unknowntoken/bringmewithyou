package com.bringMeWithYou.repository;

import com.bringMeWithYou.entity.UserObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Qualifier("MySql")
public class MySqlDao implements Dao<UserObject> {

    @PersistenceContext
    private EntityManager em;

    @Override
    @Transactional
    public <S extends UserObject> S save(S entity) {
        return em.merge(entity);
    }

    @Override
    public <S extends UserObject> Iterable<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<UserObject> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Integer integer) {
        return false;
    }

    @Override
    public Iterable<UserObject> findAll() {
        return null;
    }

    @Override
    public Iterable<UserObject> findAllById(Iterable<Integer> integers) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Integer integer) {

    }

    @Override
    public void delete(UserObject entity) {

    }

    @Override
    public void deleteAll(Iterable<? extends UserObject> entities) {

    }

    @Override
    public void deleteAll() {

    }
}
