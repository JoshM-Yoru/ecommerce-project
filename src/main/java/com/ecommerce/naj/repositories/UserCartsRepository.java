package com.ecommerce.naj.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.naj.models.UserCarts;

@Repository
public interface UserCartsRepository extends JpaRepository<UserCarts, Integer> {

}
