package com.ecommerce.naj.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.naj.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
  Optional<User> getByEmail(String email);
}