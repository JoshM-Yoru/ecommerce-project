package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.models.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {

}

