package com.ecommerce.naj.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.naj.models.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {

}

