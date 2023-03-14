package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.models.UserCarts;

@Repository
public interface UserCartsRepository extends JpaRepository<UserCarts, Integer> {

}
